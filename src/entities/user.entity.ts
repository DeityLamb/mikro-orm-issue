import { Entity, JsonType, PrimaryKey, Property } from "@mikro-orm/core";

interface UserMetadata {
  value: number;
}

@Entity()
export class User {

  @PrimaryKey()
  public id!: number;

  @Property({ type: JsonType, default: JSON.stringify({ value: 42 }) })
  public metadata!: UserMetadata;
}
