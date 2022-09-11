import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _bulletin_graphics from  "./bulletin_graphics.js";
import _bulletins from  "./bulletins.js";
import _graphics_uri from  "./graphics_uri.js";
import _greenie_score from  "./greenie_score.js";
import _pilot_mission_flight_roles from  "./pilot_mission_flight_roles.js";
import _pilot_mission_flight_types from  "./pilot_mission_flight_types.js";
import _pilot_mission_options from  "./pilot_mission_options.js";
import _pilot_mission_options_types from  "./pilot_mission_options_types.js";
import _pilot_mission_statuses from  "./pilot_mission_statuses.js";
import _pilot_missions from  "./pilot_missions.js";
import _pilots_statuses from  "./pilots_statuses.js";
import _plane_statuses from  "./plane_statuses.js";
import _plane_types from  "./plane_types.js";
import _squadron_greenie from  "./squadron_greenie.js";
import _squadron_missions from  "./squadron_missions.js";
import _squadron_missions_details from  "./squadron_missions_details.js";
import _squadron_missions_types from  "./squadron_missions_types.js";
import _squadron_pilot_planes from  "./squadron_pilot_planes.js";
import _squadron_pilots from  "./squadron_pilots.js";
import _squadron_planes from  "./squadron_planes.js";

export default function initModels(sequelize) {
  const bulletin_graphics = _bulletin_graphics.init(sequelize, DataTypes);
  const bulletins = _bulletins.init(sequelize, DataTypes);
  const graphics_uri = _graphics_uri.init(sequelize, DataTypes);
  const greenie_score = _greenie_score.init(sequelize, DataTypes);
  const pilot_mission_flight_roles = _pilot_mission_flight_roles.init(sequelize, DataTypes);
  const pilot_mission_flight_types = _pilot_mission_flight_types.init(sequelize, DataTypes);
  const pilot_mission_options = _pilot_mission_options.init(sequelize, DataTypes);
  const pilot_mission_options_types = _pilot_mission_options_types.init(sequelize, DataTypes);
  const pilot_mission_statuses = _pilot_mission_statuses.init(sequelize, DataTypes);
  const pilot_missions = _pilot_missions.init(sequelize, DataTypes);
  const pilots_statuses = _pilots_statuses.init(sequelize, DataTypes);
  const plane_statuses = _plane_statuses.init(sequelize, DataTypes);
  const plane_types = _plane_types.init(sequelize, DataTypes);
  const squadron_greenie = _squadron_greenie.init(sequelize, DataTypes);
  const squadron_missions = _squadron_missions.init(sequelize, DataTypes);
  const squadron_missions_details = _squadron_missions_details.init(sequelize, DataTypes);
  const squadron_missions_types = _squadron_missions_types.init(sequelize, DataTypes);
  const squadron_pilot_planes = _squadron_pilot_planes.init(sequelize, DataTypes);
  const squadron_pilots = _squadron_pilots.init(sequelize, DataTypes);
  const squadron_planes = _squadron_planes.init(sequelize, DataTypes);

  bulletin_graphics.belongsTo(bulletins, { as: "bulletin", foreignKey: "bulletin_id"});
  bulletins.hasMany(bulletin_graphics, { as: "bulletin_graphics", foreignKey: "bulletin_id"});
  bulletin_graphics.belongsTo(graphics_uri, { as: "graphic_uri", foreignKey: "graphic_uri_id"});
  graphics_uri.hasMany(bulletin_graphics, { as: "bulletin_graphics", foreignKey: "graphic_uri_id"});
  squadron_greenie.belongsTo(greenie_score, { as: "squadron_greenie_score", foreignKey: "squadron_greenie_score_id"});
  greenie_score.hasMany(squadron_greenie, { as: "squadron_greenies", foreignKey: "squadron_greenie_score_id"});
  pilot_missions.belongsTo(pilot_mission_flight_roles, { as: "pilot_mission_flight_role_pilot_mission_flight_role", foreignKey: "pilot_mission_flight_role"});
  pilot_mission_flight_roles.hasMany(pilot_missions, { as: "pilot_missions", foreignKey: "pilot_mission_flight_role"});
  pilot_missions.belongsTo(pilot_mission_flight_types, { as: "pilot_mission_flight_type_pilot_mission_flight_type", foreignKey: "pilot_mission_flight_type"});
  pilot_mission_flight_types.hasMany(pilot_missions, { as: "pilot_missions", foreignKey: "pilot_mission_flight_type"});
  pilot_mission_options.belongsTo(pilot_mission_options_types, { as: "pilot_mission_option", foreignKey: "pilot_mission_option_id"});
  pilot_mission_options_types.hasMany(pilot_mission_options, { as: "pilot_mission_options", foreignKey: "pilot_mission_option_id"});
  pilot_missions.belongsTo(pilot_mission_statuses, { as: "pilot_mission_status_pilot_mission_status", foreignKey: "pilot_mission_status"});
  pilot_mission_statuses.hasMany(pilot_missions, { as: "pilot_missions", foreignKey: "pilot_mission_status"});
  pilot_mission_options.belongsTo(pilot_missions, { as: "pilot_mission", foreignKey: "pilot_mission_id"});
  pilot_missions.hasMany(pilot_mission_options, { as: "pilot_mission_options", foreignKey: "pilot_mission_id"});
  squadron_pilots.belongsTo(pilots_statuses, { as: "squadron_pilot_status_pilots_status", foreignKey: "squadron_pilot_status"});
  pilots_statuses.hasMany(squadron_pilots, { as: "squadron_pilots", foreignKey: "squadron_pilot_status"});
  squadron_planes.belongsTo(plane_statuses, { as: "squadron_plane_status_plane_status", foreignKey: "squadron_plane_status"});
  plane_statuses.hasMany(squadron_planes, { as: "squadron_planes", foreignKey: "squadron_plane_status"});
  squadron_planes.belongsTo(plane_types, { as: "squadron_plane_type_plane_type", foreignKey: "squadron_plane_type"});
  plane_types.hasMany(squadron_planes, { as: "squadron_planes", foreignKey: "squadron_plane_type"});
  pilot_missions.belongsTo(squadron_missions, { as: "squadron_mission", foreignKey: "squadron_mission_id"});
  squadron_missions.hasMany(pilot_missions, { as: "pilot_missions", foreignKey: "squadron_mission_id"});
  squadron_missions.belongsTo(squadron_missions_details, { as: "squadron_mission_details_squadron_missions_detail", foreignKey: "squadron_mission_details"});
  squadron_missions_details.hasMany(squadron_missions, { as: "squadron_missions", foreignKey: "squadron_mission_details"});
  squadron_missions.belongsTo(squadron_missions_types, { as: "squadron_mission_type_squadron_missions_type", foreignKey: "squadron_mission_type"});
  squadron_missions_types.hasMany(squadron_missions, { as: "squadron_missions", foreignKey: "squadron_mission_type"});
  pilot_missions.belongsTo(squadron_pilots, { as: "squadron_pilot", foreignKey: "squadron_pilot_id"});
  squadron_pilots.hasMany(pilot_missions, { as: "pilot_missions", foreignKey: "squadron_pilot_id"});
  squadron_greenie.belongsTo(squadron_pilots, { as: "squadron_pilot", foreignKey: "squadron_pilot_id"});
  squadron_pilots.hasMany(squadron_greenie, { as: "squadron_greenies", foreignKey: "squadron_pilot_id"});
  squadron_pilot_planes.belongsTo(squadron_pilots, { as: "squadron_pilot", foreignKey: "squadron_pilot_id"});
  squadron_pilots.hasMany(squadron_pilot_planes, { as: "squadron_pilot_planes", foreignKey: "squadron_pilot_id"});
  pilot_missions.belongsTo(squadron_planes, { as: "pilot_mission_squadron_plane", foreignKey: "pilot_mission_squadron_plane_id"});
  squadron_planes.hasMany(pilot_missions, { as: "pilot_missions", foreignKey: "pilot_mission_squadron_plane_id"});
  squadron_pilot_planes.belongsTo(squadron_planes, { as: "squadron_plane", foreignKey: "squadron_plane_id"});
  squadron_planes.hasMany(squadron_pilot_planes, { as: "squadron_pilot_planes", foreignKey: "squadron_plane_id"});

  return {
    bulletin_graphics,
    bulletins,
    graphics_uri,
    greenie_score,
    pilot_mission_flight_roles,
    pilot_mission_flight_types,
    pilot_mission_options,
    pilot_mission_options_types,
    pilot_mission_statuses,
    pilot_missions,
    pilots_statuses,
    plane_statuses,
    plane_types,
    squadron_greenie,
    squadron_missions,
    squadron_missions_details,
    squadron_missions_types,
    squadron_pilot_planes,
    squadron_pilots,
    squadron_planes,
  };
}
