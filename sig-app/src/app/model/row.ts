export class Row {
  private id: string;
  private jobID: string;
  private kind: string;
  private createdBy: string;
  private value: string;

  constructor(id, jobID, kind, createdBy, value) {
    this.id = id;
    this.jobID = jobID;
    this.kind = kind;
    this.createdBy = createdBy;
    this.value = value;
  }
}
