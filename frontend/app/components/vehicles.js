import Component from '@glimmer/component';
import { action } from '@ember/object';
import fetch from 'fetch';

export default class CounterComponent extends Component {

    @action
    removeVehicle(licensePlate) {
        console.log("Removing ", licensePlate)
        fetch(`http://localhost:3000/vehicle/${licensePlate}`, {
            method: 'DELETE',
        })
        .then(() => document.location.reload())
        .catch(error => console.log("Erro: ", error))
    }
}