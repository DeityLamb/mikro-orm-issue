import { Migration } from '@mikro-orm/migrations';

export class Migration20230410153819 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "user" ("id" serial primary key, "metadata" jsonb not null default \'{"value":42}\');');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "user" cascade;');
  }

}
