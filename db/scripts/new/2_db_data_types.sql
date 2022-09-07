INSERT INTO wombats_db.plane_types (plane_type_id, plane_type_value) VALUES (1, 'F/A-18C'), (2, 'AV-8B');

INSERT INTO wombats_db.pilot_mission_flight_roles (pilot_mission_flight_role_id, pilot_mission_flight_role_value)
VALUES  (1, 'LEAD'),
        (2, 'WINGMAN'),
        (3, 'DIVISION LEAD'),
        (4, 'SINGLETON'),
        (5, 'ATC/MAGIC'),
        (6, 'FAC/JTAC'),
        (7, 'LSO/AIRBOSS');

INSERT INTO wombats_db.pilot_mission_flight_types (pilot_mission_flight_type_id, pilot_mission_flight_type_value)
VALUES
    (1, 'SEAD'),
    (2, 'DEAD'),
    (3, 'STRIKE'),
    (4, 'ESCORT'),
    (5, 'CAS'),
    (6, 'CAP'),
    (7, 'INTERCEPT'),
    (8, 'RECON'),
    (9, 'OTHER');

INSERT INTO wombats_db.pilot_mission_options_types (pilot_mission_options_type_id, pilot_mission_options_type_value, is_training)
VALUES
    (1, 'AAR', 0),
    (2, 'CASE I', 0),
    (3, 'CASE II', 0),
    (4, 'CASE III', 0),
    (5, 'NIGHT', 0),
    (6, 'BFM', 0),
    (7, 'ACM', 0),
    (8, 'STANDOFF', 0),
    (9, 'LASER', 0),
    (10, 'UNGUIDED', 0),
    (11, '1.1 Zapoznanie z kokpitem', 1),
    (12, '1.2 Pierwszy lot, podstawy kołowania, manewrowania i nawigacji', 1),
    (13, '1.3 Operacje lotniskowe wg diagramów odejścia/podejścia', 1),
    (14, '1.4 Lot IFR', 1),
    (15, '1.5 Tankowanie w powietrzu i lot w szyku', 1),
    (16, '1.6 Procedury awaryjne', 1),
    (17, '1.7 Lot kontrolny', 1),
    (18, '2.1 Reagowanie na zagrożenia z ziemi', 1),
    (19, '2.2 Basic Fighter Maneuvering I', 1),
    (20, '2.3 Air Combat Manoeuvring I', 1),
    (21, '2.4 Beyond Visual Range I', 1),
    (22, '2.5 CASE I Carrier Ops', 1),
    (23, '2.6 CASE III Carrier Ops', 1),
    (24, '2.7 Basic Fighter Maneuvering II', 1),
    (25, '2.8 Air Combat Manoeuvring II', 1),
    (26, '2.9 Beyond Visual Range II', 1),
    (27, '2.10 Ground Attack I', 1),
    (28, '2.11 Ground Attack II', 1),
    (29, '2.12 Air Combat Manoeuvring III', 1),
    (30, '2.13 Operational Situational Awareness I', 1),
    (31, '2.14 Kwalifikacja bojowa.', 1),
    (32, '3.1 Operational Situational Awareness II', 1),
    (33, '3.2 Prowadzenie Sekcji', 1),
    (34, '3.3 Air Combat Manoeuvring IV', 1),
    (35, '3.4 Ground Attack III', 1),
    (36, '3.5 Wild Weasel', 1),
    (37, '3.6 Air-to-Surface', 1),
    (38, '3.7 Close Air Support', 1);



INSERT INTO wombats_db.pilots_statuses (status_id, status_value)
VALUES  (1, 'CO'),
        (2, 'XO'),
        (3, 'PILOT'),
        (4, 'CADET'),
        (5, 'ExWombat');

INSERT INTO wombats_db.squadron_missions_types (missions_type_id, missions_type_value)
VALUES (1, 'COMBAT'),
       (2, 'TRAINING'),
       (3, 'OTH');

INSERT INTO wombats_db.plane_statuses (plane_status_id, plane_status_value)
VALUES  (1, 'IN SERVICE'),
        (2, 'MAINTENANCE'),
        (3, 'RETIRED FROM SERVICE');

INSERT INTO wombats_db.pilot_mission_statuses (pilot_mission_status_id, pilot_mission_status_value)
VALUES  (1, 'RTB'),
        (2, 'MIA'),
        (3, 'KIA'),
        (4, 'POW');

INSERT INTO wombats_db.greenie_score (greenie_score_id, greenie_score_wire, greenie_score_value, greenie_score_points )
VALUES  (1, 3, 'OK', 4),
        (2, 2, '(OK)', 3),
        (3, 4, '(OK)', 3),
        (4, 1, '-', 2),
        (5, null, 'B', 2.5),
        (6, null, 'C', 0),
        (7, null, 'WO', 2),
        (8, null, '_OK_', 5);