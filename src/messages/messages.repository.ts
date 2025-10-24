import { readFile, writeFile } from 'node:fs/promises';

export class MessagesRepository {
  async findAll() {
    const contents = await readFile('messages.json', 'utf8');
    const messages = JSON.parse(contents);

    return messages;
  }

  async create(content: string) {
    const messages = await this.findAll();

    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content };

    await writeFile('messages.json', JSON.stringify(messages), 'utf8');
  }

  async findOne(id: string) {
    const messages = await this.findAll();

    return messages[id];
  }
}
