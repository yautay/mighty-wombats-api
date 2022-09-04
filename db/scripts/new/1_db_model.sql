CREATE TABLE `squadron_pilots` (
                                   `squadron_pilot_id` int PRIMARY KEY AUTO_INCREMENT,
                                   `squadron_pilot_name` varchar(128) NOT NULL,
                                   `squadron_pilot_status` int NOT NULL,
                                   `squadron_pilot_avatar` varchar(128),
                                   `squadron_pilot_story` text
);

CREATE TABLE `squadron_greenie` (
                                    `squadron_greenie_id` int PRIMARY KEY AUTO_INCREMENT,
                                    `squadron_pilot_id` int NOT NULL,
                                    `squadron_greenie_score_id` int NOT NULL,
                                    `squadron_greenie_points` decimal NOT NULL,
                                    `squadron_greenie_night` boolean NOT NULL
);

CREATE TABLE `greenie_score` (
                                 `greenie_score_id` int PRIMARY KEY AUTO_INCREMENT,
                                 `greenie_score_value` varchar(64) UNIQUE NOT NULL
);

CREATE TABLE `squadron_pilot_planes` (
                                         `id` int PRIMARY KEY AUTO_INCREMENT,
                                         `squadron_pilot_id` int NOT NULL,
                                         `squadron_plane_id` int NOT NULL
);

CREATE TABLE `pilots_statuses` (
                                   `status_id` int PRIMARY KEY AUTO_INCREMENT,
                                   `status_value` varchar(64) UNIQUE NOT NULL
);

CREATE TABLE `squadron_planes` (
                                   `squadron_plane_id` int PRIMARY KEY AUTO_INCREMENT,
                                   `squadron_plane_modex` int NOT NULL,
                                   `squadron_plane_type` int NOT NULL,
                                   `squadron_plane_status` int NOT NULL,
                                   `flight_hours` int NOT NULL
);

CREATE TABLE `plane_types` (
                               `plane_type_id` int PRIMARY KEY AUTO_INCREMENT,
                               `plane_type_value` varchar(64) UNIQUE NOT NULL
);

CREATE TABLE `plane_statuses` (
                                  `plane_status_id` int PRIMARY KEY AUTO_INCREMENT,
                                  `plane_status_value` varchar(64) UNIQUE NOT NULL
);

CREATE TABLE `pilot_missions` (
                                  `id` int PRIMARY KEY AUTO_INCREMENT,
                                  `squadron_mission_id` int NOT NULL,
                                  `squadron_pilot_id` int NOT NULL,
                                  `squadron_plane_id` int,
                                  `pilot_mission_flight_role` int NOT NULL,
                                  `pilot_mission_flight_type` int NOT NULL,
                                  `pilot_mission_kill_aa_pvp` int,
                                  `pilot_mission_kill_aa_ai` int,
                                  `pilot_mission_kill_ag` int,
                                  `pilot_mission_kill_sead` int,
                                  `pilot_mission_kill_ship` int,
                                  `pilot_mission_kill_ff` int,
                                  `pilot_mission_time` int NOT NULL,
                                  `pilot_mission_status` int NOT NULL
);

CREATE TABLE `pilot_mission_options` (
                                         `id` int PRIMARY KEY AUTO_INCREMENT,
                                         `pilot_mission_id` int NOT NULL,
                                         `pilot_mission_option_id` int NOT NULL
);

CREATE TABLE `pilot_mission_options_types` (
                                               `pilot_mission_options_type_id` int PRIMARY KEY AUTO_INCREMENT,
                                               `pilot_mission_options_type_value` varchar(255) UNIQUE NOT NULL
);

CREATE TABLE `squadron_missions` (
                                     `squadron_mission_id` int PRIMARY KEY AUTO_INCREMENT,
                                     `squadron_mission_title` varchar(255) NOT NULL,
                                     `squadron_mission_time` int NOT NULL,
                                     `squadron_mission_date` date NOT NULL,
                                     `squadron_mission_type` int NOT NULL,
                                     `squadron_mission_details` int NOT NULL
);

CREATE TABLE `squadron_missions_types` (
                                           `missions_type_id` int PRIMARY KEY AUTO_INCREMENT,
                                           `missions_type_value` varchar(255) UNIQUE NOT NULL
);

CREATE TABLE `squadron_missions_details` (
                                             `missions_detail_id` int PRIMARY KEY AUTO_INCREMENT,
                                             `missions_detail_value` varchar(255) UNIQUE NOT NULL
);

CREATE TABLE `pilot_mission_flight_roles` (
                                              `pilot_mission_flight_role_id` int PRIMARY KEY AUTO_INCREMENT,
                                              `pilot_mission_flight_role_value` varchar(64)
);

CREATE TABLE `pilot_mission_flight_types` (
                                              `pilot_mission_flight_type_id` int PRIMARY KEY AUTO_INCREMENT,
                                              `pilot_mission_flight_type_value` varchar(64)
);

CREATE TABLE `mission_statuses` (
                                    `mission_status_id` int PRIMARY KEY AUTO_INCREMENT,
                                    `mission_status_value` varchar(64)
);

CREATE TABLE `bulletins` (
                             `bulletin_id` int PRIMARY KEY AUTO_INCREMENT,
                             `bulletin_title` varchar(255) NOT NULL,
                             `bulletin_text` varchar(2560),
                             `bulletin_date` date NOT NULL
);

CREATE TABLE `bulletin_graphics` (
                                     `id` int PRIMARY KEY AUTO_INCREMENT,
                                     `bulletin_id` int NOT NULL,
                                     `graphic_uri_id` int NOT NULL
);

CREATE TABLE `graphics_uri` (
                                `graphic_uri_id` int PRIMARY KEY AUTO_INCREMENT,
                                `graphic_uri` varchar(255) NOT NULL
);

ALTER TABLE `squadron_pilots` ADD CONSTRAINT `pilot_status` FOREIGN KEY (`squadron_pilot_status`) REFERENCES `pilots_statuses` (`status_id`);

ALTER TABLE `squadron_pilot_planes` ADD CONSTRAINT `pilot_planes` FOREIGN KEY (`squadron_pilot_id`) REFERENCES `squadron_pilots` (`squadron_pilot_id`);

ALTER TABLE `squadron_greenie` ADD CONSTRAINT `pilot_greenie` FOREIGN KEY (`squadron_pilot_id`) REFERENCES `squadron_pilots` (`squadron_pilot_id`);

ALTER TABLE `pilot_missions` ADD CONSTRAINT `pilot_missions` FOREIGN KEY (`squadron_pilot_id`) REFERENCES `squadron_pilots` (`squadron_pilot_id`);

ALTER TABLE `squadron_greenie` ADD CONSTRAINT `greenie_score` FOREIGN KEY (`squadron_greenie_score_id`) REFERENCES `greenie_score` (`greenie_score_id`);

ALTER TABLE `squadron_pilot_planes` ADD CONSTRAINT `squadron_plane` FOREIGN KEY (`squadron_plane_id`) REFERENCES `squadron_planes` (`squadron_plane_id`);

ALTER TABLE `squadron_planes` ADD CONSTRAINT `plane_status` FOREIGN KEY (`squadron_plane_status`) REFERENCES `plane_statuses` (`plane_status_id`);

ALTER TABLE `squadron_planes` ADD CONSTRAINT `plane_type` FOREIGN KEY (`squadron_plane_type`) REFERENCES `plane_types` (`plane_type_id`);

ALTER TABLE `pilot_missions` ADD CONSTRAINT `mission_roles` FOREIGN KEY (`pilot_mission_flight_role`) REFERENCES `pilot_mission_flight_roles` (`pilot_mission_flight_role_id`);

ALTER TABLE `pilot_missions` ADD CONSTRAINT `mission_types` FOREIGN KEY (`pilot_mission_flight_type`) REFERENCES `pilot_mission_flight_types` (`pilot_mission_flight_type_id`);

ALTER TABLE `pilot_mission_options` ADD CONSTRAINT `mission_options` FOREIGN KEY (`pilot_mission_id`) REFERENCES `pilot_missions` (`id`);

ALTER TABLE `pilot_missions` ADD CONSTRAINT `mission_status` FOREIGN KEY (`pilot_mission_status`) REFERENCES `mission_statuses` (`mission_status_id`);

ALTER TABLE `pilot_missions` ADD CONSTRAINT `squadron_mission` FOREIGN KEY (`squadron_mission_id`) REFERENCES `squadron_missions` (`squadron_mission_id`);

ALTER TABLE `pilot_missions` ADD CONSTRAINT `squadron_plane` FOREIGN KEY (`squadron_plane_id`) REFERENCES `squadron_planes` (`squadron_plane_id`);

ALTER TABLE `pilot_mission_options` ADD CONSTRAINT `option_type` FOREIGN KEY (`pilot_mission_option_id`) REFERENCES `pilot_mission_options_types` (`pilot_mission_options_type_id`);

ALTER TABLE `squadron_missions` ADD CONSTRAINT `mission_type` FOREIGN KEY (`squadron_mission_type`) REFERENCES `squadron_missions_types` (`missions_type_id`);

ALTER TABLE `squadron_missions` ADD CONSTRAINT `mission_details` FOREIGN KEY (`squadron_mission_details`) REFERENCES `squadron_missions_details` (`missions_detail_id`);

ALTER TABLE `bulletin_graphics` ADD CONSTRAINT `bulletin_graphic_uri` FOREIGN KEY (`bulletin_id`) REFERENCES `bulletins` (`bulletin_id`);

ALTER TABLE `bulletin_graphics` ADD CONSTRAINT `graphic_uri` FOREIGN KEY (`graphic_uri_id`) REFERENCES `graphics_uri` (`graphic_uri_id`);
