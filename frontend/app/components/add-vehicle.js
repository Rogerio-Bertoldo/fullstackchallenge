import Component from '@glimmer/component';
import { action } from '@ember/object';
import fetch from 'fetch';

export default class CounterComponent extends Component {

    @action
    addVehicle() {
        const request = {
            licensePlate: this.licensePlate,
            brand: this.brand,
            model: this.model,
            version: this.version,
            year: this.year
        }

        fetch(`http://localhost:3000/vehicle`, {
            method: 'POST',
            headers: {
                'Accept': '*/*',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(request)
        })
        .then(() => {
            window.history.back()
        })
        .catch(error => console.log("Erro: ", error))
    }
}