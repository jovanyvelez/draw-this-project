-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `users` (
	`id` integer PRIMARY KEY,
	`username` text,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`registration_date` numeric DEFAULT (datetime('now', '-5 hours'))
);
--> statement-breakpoint
CREATE TABLE `contact` (
	`id` integer PRIMARY KEY,
	`first_name` text NOT NULL,
	`second_name` text,
	`last_name` text NOT NULL,
	`gender` text NOT NULL,
	`email` text NOT NULL,
	`age` numeric NOT NULL,
	`delivery_date` numeric DEFAULT (datetime('now', '-5 hours'))
);
--> statement-breakpoint
CREATE TABLE `themes` (
	`id` integer PRIMARY KEY,
	`historia` text,
	`dibujo` text,
	`puntillismo` text,
	`tangram` text,
	`perspectiva` text,
	`anatomia` text,
	`creatividad` text
);
--> statement-breakpoint
CREATE TABLE `levels` (
	`id` integer PRIMARY KEY,
	`themes_id` integer NOT NULL,
	FOREIGN KEY (`themes_id`) REFERENCES `themes`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user_levels` (
	`users_id` integer NOT NULL,
	`levels_id` integer NOT NULL,
	PRIMARY KEY(`users_id`, `levels_id`),
	FOREIGN KEY (`levels_id`) REFERENCES `levels`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`users_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `themes_users` (
	`users_id` integer NOT NULL,
	`themes_id` integer NOT NULL,
	PRIMARY KEY(`users_id`, `themes_id`),
	FOREIGN KEY (`themes_id`) REFERENCES `themes`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`users_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action
);

*/