import { ProviderDetails } from "./provider-details";

export interface MeterDetails   {
    smartMeterId: string | null |undefined,
    userId : string | null |undefined,
    connectionStatus: string | null| undefined;
    provider : ProviderDetails
}
