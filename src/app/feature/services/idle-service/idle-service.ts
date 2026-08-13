import { Component } from '@angular/core';
import { ServicesSubMenu } from '../services-sub-menu/services-sub-menu';
import { BasePageWithSubtitle } from '@core/base-page-with-subtitle/base-page-with-subtitle';
import { JellyContainer } from '@core/jelly-container/jelly-container';
import { QuestionContainer } from '@core/question-container/question-container';
import { AnswerContainer } from '@core/answer-container/answer-container';
import { CodeText } from '@core/code-text/code-text';
import { CardContainer } from '@core/card-container/card-container';
import { CardHeader } from '@core/card-header/card-header';
import { CardBody } from '@core/card-body/card-body';
import { KeyWord } from '@core/key-word/key-word';
import { String } from '@core/string/string';
import { ClassName } from '@core/class-name/class-name';
import { MethodName } from '@core/method-name/method-name';
import { Indent1 } from '@core/indent-1/indent-1';
import { Comment } from '@core/comment/comment';
import { Property } from '@core/property/property';
import { Indent2 } from '@core/indent-2/indent-2';
import { Indent3 } from '@core/indent-3/indent-3';
import { Indent4 } from '@core/indent-4/indent-4';
import { Indent5 } from '@core/indent-5/indent-5';
import { Indent6 } from '@core/indent-6/indent-6';
import { tokenize } from '@core/parser/typescript/tokenizer';

@Component({
  selector: 'prb-idle-service',
  imports: [
    ServicesSubMenu,
    JellyContainer,
    QuestionContainer,
    AnswerContainer,
    CodeText,
    CardContainer,
    CardHeader,
    CardBody,
    KeyWord,
    String,
    ClassName,
    MethodName,
    Indent1,
    Comment,
    Property,
    Indent2,
    Indent3,
    Indent4,
    Indent5,
    Indent6,
  ],
  templateUrl: './idle-service.html',
  styleUrl: '../services.scss',
})
export class IdleService extends BasePageWithSubtitle {
  override pageSubtitle = 'Services - Idle Service';
  data =
    "import { Injectable, inject, signal, effect, OnDestroy } from'@angular/core';\n" +
    "import { Router } from'@angular/router';\n" +
    "import { Subject, fromEvent, merge, Subscription } from'rxjs';\n" +
    "import { switchMap, throttleTime } from'rxjs/operators';\n\n" +
    '@Injectable({\n' +
    "\tprovidedIn: 'root',\n" +
    '})\n' +
    'export classIdleService implements OnDestroy {\n' +
    '\tprivate router = inject(Router);\n\n' +
    '// Configuration Constants\n' +
    'private readonly IDLE_TIMEOUT_MS = 15 * 60 * 1000; // 15 minutes\n' +
    'private readonly COUNTDOWN_SECONDS = 60; // 1 minute warning\n\n' +
    '// Signal States for UI Consumption\n' +
    'readonly isIdle = signal<boolean>(false);\n' +
    'readonly countdown = signal<number>(this.COUNTDOWN_SECONDS);\n\n' +
    'private destroy$ = new Subject<void>();\n' +
    'private activitySub?: Subscription;\n' +
    'private countdownInterval?: any;\n\n' +
    'constructor() {\n' +
    'this.startTracking();\n' +
    '\n' +
    '// Side effect: Automatically handle logout when countdown reaches 0\n' +
    'effect(() => {\n' +
    'if (this.isIdle() && this.countdown() <= 0) {\n' +
    'this.logoutUser();\n' +
    '}\n' +
    '});\n' +
    '}\n' +
    '\n' +
    '/**\n' +
    '* Initializes user activity listeners.\n' +
    '* Leverages throttled RxJS event tracking for high performance.\n' +
    '*/\n' +
    'startTracking(): void {\n' +
    'this.stopTracking();\n' +
    'this.isIdle.set(false);\n' +
    'this.countdown.set(this.COUNTDOWN_SECONDS);\n' +
    '\n' +
    'const activityEvents$ = merge(\n' +
    "fromEvent(window, 'mousemove'),\n" +
    "fromEvent(window, 'keydown'),\n" +
    "fromEvent(window, 'click'),\n" +
    "fromEvent(window, 'scroll'),\n" +
    "fromEvent(window, 'touchstart')\n" +
    ').pipe(\n' +
    '// Throttling prevents rapid-fire events from over-allocating timers\n' +
    'throttleTime(500)\n' +
    ');\n' +
    '\n' +
    'this.activitySub = activityEvents$\n' +
    '.pipe(\n' +
    '// Resets and maps into a delayed execution\n' +
    'switchMap(() => newPromise((resolve) => setTimeout(resolve, this.IDLE_TIMEOUT_MS)))\n' +
    ')\n' +
    '.subscribe(() => {\n' +
    'this.becomeIdle();\n' +
    '});\n' +
    '}\n' +
    '\n' +
    '/**\n' +
    '* Switches the state to idle and initializes the warning countdown\n' +
    '*/\n' +
    'private becomeIdle(): void {\n' +
    'this.isIdle.set(true);\n' +
    'this.stopTracking(); // Stop listening to interactions while warning is active\n' +
    '\n' +
    'this.countdownInterval = setInterval(() => {\n' +
    'this.countdown.update((current) => current - 1);\n' +
    '}, 1000);\n' +
    '}\n' +
    '\n' +
    '/**\n' +
    '* Resets the idle state back to normal if the user signals they are present\n' +
    '*/\n' +
    'resetIdle(): void {\n' +
    'if (this.countdownInterval) {\n' +
    'clearInterval(this.countdownInterval);\n' +
    '}\n' +
    'this.startTracking();\n' +
    '}\n' +
    '\n' +
    'private stopTracking(): void {\n' +
    'if (this.activitySub) {\n' +
    'this.activitySub.unsubscribe();\n' +
    '}\n' +
    'if (this.countdownInterval) {\n' +
    'clearInterval(this.countdownInterval);\n' +
    '}\n' +
    '}\n' +
    '\n' +
    'private logoutUser(): void {\n' +
    'this.cleanup();\n' +
    "this.router.navigate(['/login']);\n" +
    "console.warn('User session terminated due to inactivity.');\n" +
    '}\n' +
    '\n' +
    'private cleanup(): void {\n' +
    'this.stopTracking();\n' +
    'this.destroy$.next();\n' +
    'this.destroy$.complete();\n' +
    '}\n' +
    '\n' +
    'ngOnDestroy(): void {\n' +
    'this.cleanup();\n' +
    '}\n' +
    '}';

  override init() {
    const dataArray = this.data.split('\n');
    const tokens = tokenize(this.data, true);
    console.log(dataArray[0]);
    console.log('Tokens: ', tokens);
  }
}
