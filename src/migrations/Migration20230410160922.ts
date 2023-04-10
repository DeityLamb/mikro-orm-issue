import { Migration } from '@mikro-orm/migrations';

export class Migration20230410160922 extends Migration {

  async up(): Promise<void> {
    this.addSql('alter table "user" alter column "metadata" type jsonb using ("metadata"::jsonb);');
    this.addSql('alter table "user" alter column "metadata" set default \'{"value":42}\';');
  }

  async down(): Promise<void> {
    this.addSql('alter table "user" alter column "metadata" type jsonb using ("metadata"::jsonb);');
    this.addSql('alter table "user" alter column "metadata" set default \'{"value": 42}\';');
  }

}
