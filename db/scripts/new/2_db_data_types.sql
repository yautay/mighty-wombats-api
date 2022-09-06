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

INSERT INTO wombats_db.pilot_mission_options_types (pilot_mission_options_type_id, pilot_mission_options_type_value)
VALUES
    (1, 'AAR'),
    (2, 'CASE I'),
    (3, 'CASE II'),
    (4, 'CASE III'),
    (5, 'NIGHT'),
    (6, 'BFM'),
    (7, 'ACM'),
    (8, 'STANDOFF'),
    (9, 'LASER'),
    (10, 'UNGUIDED');

INSERT INTO wombats_db.pilots_statuses (status_id, status_value)
VALUES  (1, 'CO'),
        (2, 'XO'),
        (3, 'PILOT'),
        (4, 'CADET'),
        (5, 'ExWombat');

INSERT INTO wombats_db.squadron_missions_types (missions_type_id, missions_type_value)
VALUES (1, 'HRP'),
       (2, 'LRP'),
       (3, 'EXAMS'),
       (4, 'FREE TRAINING'),
       (5, 'SQUADRON TRAINING'),
       (6, 'CQ'),
       (7, 'OTH'),
       (8, 'JOINT OPS');

INSERT INTO wombats_db.plane_statuses (plane_status_id, plane_status_value)
VALUES  (1, 'IN SERVICE'),
        (2, 'MAINTENANCE'),
        (3, 'RETIRED FROM SERVICE');

INSERT INTO wombats_db.pilot_mission_statuses (pilot_mission_status_id, pilot_mission_status_value)
VALUES  (1, 'RTB'),
        (2, 'MIA'),
        (3, 'KIA'),
        (4, 'POW');