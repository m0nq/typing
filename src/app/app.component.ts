import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
    selector: 'cq-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    randomText = lorem.sentence();
    enteredText = '';

    public onInput(value: string): void {
        this.enteredText = value;
    }

    public compare(letter: string, enteredLetter: string): any {
        if (!enteredLetter) {
            return 'pending';
        }
        return letter === enteredLetter ? 'correct' : 'incorrect';
    }
}
