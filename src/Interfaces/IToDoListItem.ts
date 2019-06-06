export interface ITodoListItem {
    label: string;
    done: boolean;
    important: boolean;
    onItemCheckBoxChange(e: any): void;
}