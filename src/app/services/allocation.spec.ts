import { AllocationService } from './allocation.service';
import { Manager } from '../models/manager.model';
import { Department } from '../models/department.model';

describe('AllocationService', () => {
  let allocationService: AllocationService;

  beforeEach(() => {
    allocationService = new AllocationService();
  });

  it('should use manager as rootGroup', () => {
    const manager = new Manager('John', 'Doe');

    allocationService.createRoot(manager);

    expect(allocationService.rootGroup.getName()).toEqual('John Doe');
    expect(allocationService.rootGroupType).toEqual('manager');
  });

  it('should use department as rootGroup', () => {
    const department = new Department('Account');

    allocationService.createRoot(department);

    expect(allocationService.rootGroup.getName()).toEqual('Account');
    expect(allocationService.rootGroupType).toEqual('department');
  });
});
