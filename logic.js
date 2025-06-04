// Helpers to be used across logic
function can_level(level) {
	if (level === 1) {
		return "logical";
	}
	if (getSettingState(strict_bosses)) {
		return has("EVENT_" + (level - 1) + "_boss");
	}
	return "logical";
}
function can_stage(level, stage) {
	if (can_level(level)) {
		if (stage === 1) {
			return "logical";
		}
		if (stage === 7 && getSettingState(open_world)) {
			const st = stages_completed(level);
			const stPerBoss = getSettingState(ow_boss_requirement);
			if (st >= stPerBoss) {
				const hs = getSettingState(heartStars);
				const hsPerBoss = getSettingState(hs_boss_requirement);
				if (hs >= hsPerBoss * level) {
					return "logical";
				}
			}
			return;
		}
		if (!getSettingState(open_world)) {
			return has("EVENT_" + level + "_" + (stage - 1));
		}
		return "logical";
	}
}
function stages_completed(level) {
	let count = 0;
	for (let i = 1; i < 7; i++) {
		if (has("EVENT_" + level + "_" + i)) {
			count = count + 1;
		}
	}
	return count;
}
function has(divId) {
	const div = document.getElementById(divId);
	if (!div) {
		return false;
	}
	if (div.classList.contains("locationchecked") || 
		   div.classList.contains("itemchecked") ||
		   div.classList.contains("subchecked")) {
		return "logical";
	}
}
function can_swim() {
	if (has("Kine")) {
		return "logical";
	}
	if (has("Coo")) {
		return "possible";
	}
}

const locationHighlight = {
	"EVENT_hyper_zone": function() {
		const hs = getSettingState(heartStars);
		const hsPerBoss = getSettingState(hs_boss_requirement);
		if (hs >= hsPerBoss * 5) {
			return "logical";
		}
	}
}

const locationLogic = {
	// ////////////////////
	// Grass Land
	// ////////////////////
	// 1
	"grass_land_1_u1": function() {
		return has("Parasol");
	},
	"grass_land_1_m1": function() {
		return has("Spark");
	},
	"grass_land_tulip": function() {
		return "logical";
	},
	"grass_land_1": function() {
		return "logical";
	},
	"EVENT_1_1": function() {
		return "logical";
	},
	// 2
	"grass_land_2_u1": function() {
		if (can_stage(1, 2)) {
			return has("Needle");
		}
	},
	"grass_land_muchi": function() {
		if (can_stage(1, 2)) {
			return has("Chuchu");
		}
	},
	"grass_land_2": function() {
		return can_stage(1, 2);
	},
	"EVENT_1_2": function() {
		return can_stage(1, 2);
	},
	// 3
	"grass_land_3_u1": function() {
		return can_stage(1, 3);
	},
	"grass_land_3_m1": function() {
		return can_stage(1, 3);
	},
	"grass_land_pitcherman": function() {
		return can_stage(1, 3);
	},
	"grass_land_3": function() {
		return can_stage(1, 3);
	},
	"EVENT_1_3": function() {
		return can_stage(1, 3);
	},
	// 4
	"grass_land_4_u1": function() {
		return can_stage(1, 4);
	},
	"grass_land_4_m1": function() {
		return can_stage(1, 4);
	},
	"grass_land_4_m2": function() {
		return can_stage(1, 4);
	},
	"grass_land_4_m3": function() {
		return can_stage(1, 4);
	},
	"grass_land_chao": function() {
		if (can_stage(1, 4)) {
			return has("Stone");
		}
	},
	"grass_land_4": function() {
		return can_stage(1, 4);
	},
	"EVENT_1_4": function() {
		return can_stage(1, 4);
	},
	// 5
	"grass_land_mine": function() {
		if (can_stage(1, 5)) {
			return has("Kine");
		}
	},
	"grass_land_5": function() {
		return can_stage(1, 5);
	},
	"EVENT_1_5": function() {
		return can_stage(1, 5);
	},
	// 6
	"grass_land_6_u1": function() {
		return can_stage(1, 6);
	},
	"grass_land_6_u2": function() {
		return can_stage(1, 6);
	},
	"grass_land_pierre": function() {
		return can_stage(1, 6);
	},
	"grass_land_6": function() {
		return can_stage(1, 6);
	},
	"EVENT_1_6": function() {
		return can_stage(1, 6);
	},
	// boss
	"grass_land_whispy": function() {
		return can_stage(1, 7);
	},
	"EVENT_1_boss": function() {
		return can_stage(1, 7);
	},
	// ////////////////////
	// Ripple Field
	// ////////////////////
	// 1
	"ripple_field_kamuribana": function() {
		if (has("Pitch") && has("Cleaning")) {
			return can_stage(2, 1);
		}
	},
	"ripple_field_1": function() {
		return can_stage(2, 1);
	},
	"EVENT_2_1": function() {
		return can_stage(2, 1);
	},
	// 2
	"ripple_field_2_u1": function() {
		if (can_stage(2, 2)) {
			return can_swim();
		}
	},
	"ripple_field_2_m1": function() {
		if (can_stage(2, 2)) {
			return can_swim();
		}
	},
	"ripple_field_bakasa": function() {
		if (has("Kine") && has("Parasol")) {
			return can_stage(2, 2);
		}
	},
	"ripple_field_2": function() {
		return can_stage(2, 2);
	},
	"EVENT_2_2": function() {
		return can_stage(2, 2);
	},
	// 3
	"ripple_field_3_u1": function() {
		if (has("Cutter") || has("Spark")) {
			return can_stage(2, 3);
		}
	},
	"ripple_field_3_m1": function() {
		return can_stage(2, 3);
	},
	"ripple_field_elieel": function() {
		return can_stage(2, 3);
	},
	"ripple_field_3": function() {
		return can_stage(2, 3);
	},
	"EVENT_2_3": function() {
		return can_stage(2, 3);
	},
	// 4
	"ripple_field_4_u1": function() {
		if (has("Stone")) {
			return can_stage(2, 4);
		}
	},
	"ripple_field_4_m1": function() {
		return can_stage(2, 4);
	},
	"ripple_field_4_m2": function() {
		if (has("Stone")) {
			return can_stage(2, 4);
		}
	},
	"ripple_field_toad": function() {
		if (has("Needle")) {
			return can_stage(2, 4);
		}
	},
	"ripple_field_4": function() {
		return can_stage(2, 4);
	},
	"EVENT_2_4": function() {
		return can_stage(2, 4);
	},
	// 5
	"ripple_field_5_u1": function() {
		if (has("Burning") && has("Stone") && can_stage(2, 5)) {
			return can_swim();
		}
	},
	"ripple_field_5_m1": function() {
		if (can_stage(2, 5)) {
			return can_swim();
		}
	},
	"ripple_field_5_m2": function() {
		if (has("Burning") && has("Stone") && can_stage(2, 5)) {
			return can_swim();
		}
	},
	"ripple_field_mama_pitch": function() {
		if (has("Burning") && has("Stone") && has("Pitch") && can_stage(2, 5)) {
			return can_swim();
		}
	},
	"ripple_field_5": function() {
		if (can_stage(2, 5)) {
			return can_swim();
		}
	},
	"EVENT_2_5": function() {
		if (can_stage(2, 5)) {
			return can_swim();
		}
	},
	// 6
	"ripple_field_hb002": function() {
		return can_stage(2, 6);
	},
	"ripple_field_6": function() {
		return can_stage(2, 6);
	},
	"EVENT_2_6": function() {
		return can_stage(2, 6);
	},
	// boss
	"ripple_field_acro": function() {
		return can_stage(2, 7);
	},
	"EVENT_2_boss": function() {
		return can_stage(2, 7);
	},
	// ////////////////////
	// Sand Canyon
	// ////////////////////
	// 1
	"sand_canyon_1_u1": function() {
		return can_stage(3, 1);
	},
	"sand_canyon_mushrooms": function() {
		return can_stage(3, 1);
	},
	"sand_canyon_1": function() {
		return can_stage(3, 1);
	},
	"EVENT_3_1": function() {
		return can_stage(3, 1);
	},
	// 2
	"sand_canyon_2_u1": function() {
		return can_stage(3, 2);
	},
	"sand_canyon_2_m1": function() {
		return can_stage(3, 2);
	},
	"sand_canyon_auntie": function() {
		if (has("Cleaning")) {
			return can_stage(3, 2);
		}
	},
	"sand_canyon_2": function() {
		return can_stage(3, 2);
	},
	"EVENT_3_2": function() {
		return can_stage(3, 2);
	},
	// 3
	"sand_canyon_caramello": function() {
		return can_stage(3, 3);
	},
	"sand_canyon_3": function() {
		return can_stage(3, 3);
	},
	"EVENT_3_3": function() {
		return can_stage(3, 3);
	},
	// 4
	"sand_canyon_4_u1": function() {
		if (has("Cleaning")) {
			return can_stage(3, 4);
		}
	},
	"sand_canyon_4_m1": function() {
		return can_stage(3, 4);
	},
	"sand_canyon_4_m2": function() {
		if (has("Needle")) {
			return can_stage(3, 4);
		}
	},
	"sand_canyon_hikari": function() {
		return can_stage(3, 4);
	},
	"sand_canyon_4": function() {
		return can_stage(3, 4);
	},
	"EVENT_3_4": function() {
		return can_stage(3, 4);
	},
	// 5
	"sand_canyon_5_u1": function() {
		return can_stage(3, 5);
	},
	"sand_canyon_5_u2": function() {
		if (has("Ice")) {
			if (has("Rick") || has("Coo") || has("Chuchu") || has("Pitch") || has("Nago")) {
				return can_stage(3, 5);
			}
		}
	},
	"sand_canyon_5_u3": function() {
		if (has("Ice")) {
			if (has("Rick") || has("Coo") || has("Chuchu") || has("Pitch") || has("Nago")) {
				return can_stage(3, 5);
			}
		}
	},
	"sand_canyon_5_u4": function() {
		if (has("Ice")) {
			if (has("Rick") || has("Coo") || has("Chuchu") || has("Pitch") || has("Nago")) {
				return can_stage(3, 5);
			}
		}
	},
	"sand_canyon_5_m1": function() {
		return can_stage(3, 5);
	},
	"sand_canyon_nyupun": function() {
		if (has("Chuchu") && has("Cutter")) {
			return can_stage(3, 5);
		}
	},
	"sand_canyon_5": function() {
		if (has("Cutter")) {
			return can_stage(3, 5);
		}
	},
	"EVENT_3_5": function() {
		if (has("Cutter")) {
			return can_stage(3, 5);
		}
	},
	// 6
	"sand_canyon_rob": function() {
		if (has("Coo") && has("Stone") && can_stage(3, 6)) {
			if (has("Parasol") || has("Cutter")) {
				if (has("Spark") || has("Cleaning")) {
					if (has("Ice") || has("Needle")) {
						if (has("Kine") && has("Parasol") && has("Spark")) {
							return "logical";
						}
						return "possible";
					}
				}
			}
		}
	},
	"sand_canyon_6": function() {
		return can_stage(3, 6);
	},
	"EVENT_3_6": function() {
		return can_stage(3, 6);
	},
	// boss
	"sand_canyon_poncon": function() {
		return can_stage(3, 7);
	},
	"EVENT_3_boss": function() {
		return can_stage(3, 7);
	},
	// ////////////////////
	// Cloudy Park
	// ////////////////////
	// 1
	"cloudy_park_1_u1": function() {
		return can_stage(4, 1);
	},
	"cloudy_park_1_m1": function() {
		return can_stage(4, 1);
	},
	"cloudy_park_hibanamodoki": function() {
		if (can_stage(4, 1) && has("Cleaning")) {
			if (has("Coo")) {
				return "logical";
			}
			if (has("Rick")) {
				return "possible";
			}
		}
	},
	"cloudy_park_1": function() {
		return can_stage(4, 1);
	},
	"EVENT_4_1": function() {
		return can_stage(4, 1);
	},
	// 2
	"cloudy_park_piyokeko": function() {
		if (has("Needle")) {
			return can_stage(4, 2);
		}
	},
	"cloudy_park_2": function() {
		return can_stage(4, 2);
	},
	"EVENT_4_2": function() {
		return can_stage(4, 2);
	},
	// 3
	"cloudy_park_mrball": function() {
		return can_stage(4, 3);
	},
	"cloudy_park_3": function() {
		return can_stage(4, 3);
	},
	"EVENT_4_3": function() {
		return can_stage(4, 3);
	},
	// 4
	"cloudy_park_4_u1": function() {
		return can_stage(4, 4);
	},
	"cloudy_park_4_m1": function() {
		return can_stage(4, 4);
	},
	"cloudy_park_mikarin": function() {
		if (has("Coo")) {
			return can_stage(4, 4);
		}
	},
	"cloudy_park_4": function() {
		return can_stage(4, 4);
	},
	"EVENT_4_4": function() {
		return can_stage(4, 4);
	},
	// 5
	"cloudy_park_5_m1": function() {
		return can_stage(4, 5);
	},
	"cloudy_park_pick": function() {
		if (has("Rick")) {
			return can_stage(4, 5);
		}
	},
	"cloudy_park_5": function() {
		return can_stage(4, 5);
	},
	"EVENT_4_5": function() {
		return can_stage(4, 5);
	},
	// 6
	"cloudy_park_6_u1": function() {
		if (has("Cutter")) {
			return can_stage(4, 6);
		}
	},
	"cloudy_park_hb007": function() {
		return can_stage(4, 6);
	},
	"cloudy_park_6": function() {
		return can_stage(4, 6);
	},
	"EVENT_4_6": function() {
		return can_stage(4, 6);
	},
	// boss
	"cloudy_park_ado": function() {
		return can_stage(4, 7);
	},
	"EVENT_4_boss": function() {
		return can_stage(4, 7);
	},
	// ////////////////////
	// Iceberg
	// ////////////////////
	// 1
	"iceberg_kogoesou": function() {
		if (has("Burning")) {
			return can_stage(5, 1);
		}
	},
	"iceberg_1": function() {
		return can_stage(5, 1);
	},
	"EVENT_5_1": function() {
		return can_stage(5, 1);
	},
	// 2
	"iceberg_samus": function() {
		if (has("Ice")) {
			return can_stage(5, 2);
		}
	},
	"iceberg_2": function() {
		return can_stage(5, 2);
	},
	"EVENT_5_2": function() {
		return can_stage(5, 2);
	},
	// 3
	"iceberg_3_m1": function() {
		return can_stage(5, 3);
	},
	"iceberg_kawasaki": function() {
		return can_stage(5, 3);
	},
	"iceberg_3": function() {
		return can_stage(5, 3);
	},
	"EVENT_5_3": function() {
		return can_stage(5, 3);
	},
	// 4
	"iceberg_name": function() {
		if (has("Coo") && has("Burning") && has("Chuchu")) {
			return can_stage(5, 4);
		}
	},
	"iceberg_4": function() {
		if (has("Burning")) {
			return can_stage(5, 4);
		}
	},
	"EVENT_5_4": function() {
		if (has("Burning")) {
			return can_stage(5, 4);
		}
	},
	// 5
	"iceberg_5_u1": function() {
		return can_stage(5, 5);
	},
	"iceberg_5_u2": function() {
		return can_stage(5, 5);
	},
	"iceberg_5_u3": function() {
		return can_stage(5, 5);
	},
	"iceberg_shiro": function() {
		if (has("Nago")) {
			return can_stage(5, 5);
		}
	},
	"iceberg_5": function() {
		return can_stage(5, 5);
	},
	"EVENT_5_5": function() {
		return can_stage(5, 5);
	},
	// 6
	"iceberg_6_u1": function() {
		return can_stage(5, 6);
	},
	"iceberg_6_m1": function() {
		return can_stage(5, 6);
	},
	"iceberg_angel": function() {
		if (has("Spark") && has("Stone") && has("Parasol") && has("Ice") && has("Cutter") && has("Cleaning") && has("Burning") && has("Needle")) {
			return can_stage(5, 6);
		}
	},
	"iceberg_6": function() {
		return can_stage(5, 6);
	},
	"EVENT_5_6": function() {
		return can_stage(5, 6);
	},
	// boss
	"iceberg_dedede": function() {
		return can_stage(5, 7);
	},
	"EVENT_5_boss": function() {
		return can_stage(5, 7);
	},
	// ////////////////////
	// Hyper Zone
	// ////////////////////
	"EVENT_hyper_zone": function() {
		if (getSettingState(goal_speed)) {
			let hsReq = 5 * getSettingState(hs_boss_requirement);
			// We connected to archipelago and can cheat the actual number
			if (requiredHeartStars) {
				hsReq = requiredHeartStars;
			}
			if (getSettingState(heartStars) >= hsReq) {
				return "logical";
			}
		}
		else if (has("EVENT_1_boss") && has("EVENT_2_boss") && has("EVENT_3_boss") && has("EVENT_4_boss") && has("EVENT_5_boss")) {
			return "logical";
		}
	}
}