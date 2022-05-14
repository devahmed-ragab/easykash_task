import { Table, Model, Column, CreatedAt, UpdatedAt, AllowNull, ForeignKey } from "sequelize-typescript";

import { Seller } from "./Seller";

@Table({ timestamps: true, tableName: "transactions" })
export class Transaction extends Model {
	@Column
	title!: string;

	@Column
	image!: string;

	@Column
	price!: number;

	@ForeignKey(() => Seller)
	@AllowNull(false)
	@Column({ onDelete: "CASCADE" })
	sellerId!: number;

	@CreatedAt
	@AllowNull(false)
	@Column
	readonly createdAt!: Date;

	@UpdatedAt
	@AllowNull(false)
	@Column
	readonly updatedAt!: Date;
}
