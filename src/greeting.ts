/** Example class in a separate module — compiled with the rest of the project. */
export class Greeter {
  constructor(private readonly name: string) {}

  greet(): string {
    return `Hello from ${this.name} (TypeScript template)`;
  }
}
