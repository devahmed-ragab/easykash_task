import {
	Model,
	Table,
	Column,
	Unique,
	HasMany,
	UpdatedAt,
	AllowNull,
	CreatedAt,
	createIndexDecorator,
} from "sequelize-typescript";
import { Transaction } from "./Transaction";

// TODO: This Index is not working as expected.
const IdIndex = createIndexDecorator({
	name: "sellers_id_Hash",
	unique: false,
	using: "HASH",
	prefix: "idx_",
});

@Table({ tableName: "sellers", timestamps: true })
export class Seller extends Model {
	@IdIndex
	@Column({ primaryKey: true, autoIncrement: true })
	id!: number;

	@Unique
	@Column
	name!: string;

	@HasMany(() => Transaction, "sellerId")
	transaction?: Array<Transaction>;

	@CreatedAt
	@AllowNull(false)
	@Column
	readonly createdAt!: Date;

	@UpdatedAt
	@AllowNull(false)
	@Column
	readonly updatedAt!: Date;
}
