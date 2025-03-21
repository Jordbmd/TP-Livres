import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity({ name: "book" })
export class Book {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  numberOfVolumes: number;

  @Column()
  author: string;

  @Column()
  price: number;

  @Column()
  rating: number;

  @Column({ type: "date" })
  publicationDate: Date;

  @CreateDateColumn({ type: "timestamptz" })
  createdAt: Date;

  @UpdateDateColumn({ type: "timestamptz" })
  updatedAt: Date;

  constructor(
    id: number,
    name: string,
    numberOfVolumes: number,
    author: string,
    price: number,
    rating: number,
    publicationDate: Date,
    createdAt: Date,
    updatedAt: Date
  ) {
    this.id = id;
    this.name = name;
    this.numberOfVolumes = numberOfVolumes;
    this.author = author;
    this.price = price;
    this.rating = rating;
    this.publicationDate = publicationDate;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}
