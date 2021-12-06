import Route from '@ember/routing/route';
import fetch from 'fetch';

export default class VehiclesRoute extends Route {
    async model() {
        const response = await fetch('http://localhost:3000/vehicles');
        return response.json()
    }
}
