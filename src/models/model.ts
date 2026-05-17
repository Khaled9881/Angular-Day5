export class FromTest {
  Name: string | null | undefined;
  Email: string | null | undefined;
  Message: string | null | undefined;

  constructor(Name: string, Email: string, Message: string) {
    this.Name = Name;
    this.Email = Email;
    this.Message = Message;
  }
}
