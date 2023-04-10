## Problem comparing default json fields in postgresql migrations

### Description

After we created the initial migration for the model with a JSON field that has a default value,
all next migrations will attempt to modify the default value to the same one.

### Reproduction

Create an entity that has a json field

```bash 
mikro-orm migration:create
# created first migration
```
```bash
mikro-orm migration:up
# we up migration and not change anything
```
```bash
mikro-orm migration:create
# a new migration was created that changes the default value to the same
```
