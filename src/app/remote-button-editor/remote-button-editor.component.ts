import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Button } from "../classes/button";

@Component({
    selector: 'app-remote-button-editor',
    templateUrl: './remote-button-editor.component.html',
    styleUrls: ['./remote-button-editor.component.scss']
})
export class RemoteButtonEditorComponent implements OnInit {

    button: Button;

    constructor(private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let buttonId: string = params['buttonId'];
            this.button = {
                id: buttonId,
                icon: 'power-off',
                label: 'sample button'
            };
        });
    }

}
