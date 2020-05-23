import {Component} from '../core/component';

export class HeaderComponent extends Component {
    constructor(id) {
        super(id);
    }

    init() {
        const btn = this.$el.querySelector('.js-header-start');
        btn.addEventListener('click', buttonHandler.bind(this));
    }
}

function buttonHandler() {
    this.hide();
}