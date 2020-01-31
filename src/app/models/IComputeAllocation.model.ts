export interface IComputeAllocation {
  allocationTotal: number;
  getTotalAllocation: (depth: number) => number;
}
