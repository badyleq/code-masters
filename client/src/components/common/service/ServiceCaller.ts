import { IServiceConfiguration } from "../ServiceConfiguration";
import axios from "axios";


export default class ServiceCaller {
    private serviceConfiguration: IServiceConfiguration;
    private path: string;

    public withServiceConfiguration(serviceConfiguration: IServiceConfiguration): ServiceCaller {
        this.serviceConfiguration = serviceConfiguration
        return this;
    }

    public withPath(path: string): ServiceCaller {
        this.path = path;
        return this;
    }

    public get<T>(): Promise<T> {
        return axios
            .get(`${this.serviceConfiguration.url}/${this.path}`)
            .then(response => response.data);
    }
}