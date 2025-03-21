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

  // j'ai du ajouté ca pour ca pour les nombres a virgule (postgre ne supporte pas par default avec number)
  @Column({ type: "decimal", precision: 10, scale: 2 })
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
