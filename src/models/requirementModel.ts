export class RequirementModel {
    id: number = 0;
    name: string = "";
    description: string = "";
    fileName: string = "";
    constructor(data: unknown) {
        this.validateAndAssign(data);
    }
 
    private validateAndAssign(data: unknown): void {
        if (this.isRequirementData(data)) {
            this.id = data.id;
            this.name = data.name;
            this.description = data.description;
        } else {
            throw new Error('Invalid data provided to Requirement constructor');
        }
    }

    private isRequirementData(data: unknown): data is { id: number, name: string, description: string } {
        if (typeof data !== 'object' || data === null) {
            return false;
        }

        const { id, name, description } = data as { id?: unknown, name?: unknown, description?: unknown };
        return typeof id === 'number' && typeof name === 'string' && typeof description === 'string';
    }
}
