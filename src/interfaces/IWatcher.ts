export interface IWatcher {
    _id: string;
    url: string;
    alertCondition: string;
    samplePeriod: number;
    samplingFrame: {
        top: number;
        left: number;
        width: number;
        height: number;
    };
    snapshot: string;
    isActive: boolean;
    lastSnapshot: string;
    createdAt: string;
}
