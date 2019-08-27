export class Row {
  public id: string;
  public jobID: string;
  public kind: string;
  public createdBy: string;
  public value: string;

  constructor(id, jobID, kind, createdBy, value) {
    this.id = id;
    this.jobID = jobID;
    this.kind = kind;
    this.createdBy = createdBy;
    this.value = value;
  }
}
