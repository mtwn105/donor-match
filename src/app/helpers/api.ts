import { Client, Account, ID } from 'appwrite';
import { environment } from 'src/environments/environment';

export class Api {
  private static sdk: Client | null;

  static provider() {
    if (this.sdk) return this.sdk;
    let client = new Client();
    client
      .setEndpoint(environment.endpoint)
      .setProject(environment.project)
      .setLocale('en-US');
    this.sdk = client;
    return this.sdk;
  }
}