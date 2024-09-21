// Helpers to be used across logic
function can_boss(level) {
	if (can_level(level)) {
		const st = stages_completed(level);
		const stPerBoss = parseInt(stages_for_boss.classList[1].substring(1), 10);
		if (st >= stPerBoss) {
			const hs = parseInt(heartStars.classList[1].substring(1), 10);
			const hsPerBoss = parseInt(hearts_for_boss.classList[1].substring(1), 10);
			if (hs >= hsPerBoss * level) {
				return "logical";
			}
		}
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
function can_level(level) {
	if (level === 1) {
		return "logical";
	}
	return has("EVENT_" + (level - 1) + "_boss");
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
		const hs = parseInt(heartStars.classList[1].substring(1), 10);
		const hsPerBoss = parseInt(hearts_for_boss.classList[1].substring(1), 10);
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
		return has("Needle");
	},
	"grass_land_muchi": function() {
		return has("Chuchu");
	},
	"grass_land_2": function() {
		return "logical";
	},
	"EVENT_1_2": function() {
		return "logical";
	},
	// 3
	"grass_land_3_u1": function() {
		return "logical";
	},
	"grass_land_3_m1": function() {
		return "logical";
	},
	"grass_land_pitcherman": function() {
		return "logical";
	},
	"grass_land_3": function() {
		return "logical";
	},
	"EVENT_1_3": function() {
		return "logical";
	},
	// 4
	"grass_land_4_u1": function() {
		return "logical";
	},
	"grass_land_4_m1": function() {
		return "logical";
	},
	"grass_land_4_m2": function() {
		return "logical";
	},
	"grass_land_4_m3": function() {
		return "logical";
	},
	"grass_land_chao": function() {
		return has("Stone");
	},
	"grass_land_4": function() {
		return "logical";
	},
	"EVENT_1_4": function() {
		return "logical";
	},
	// 5
	"grass_land_mine": function() {
		return has("Kine");
	},
	"grass_land_5": function() {
		return "logical";
	},
	"EVENT_1_5": function() {
		return "logical";
	},
	// 6
	"grass_land_6_u1": function() {
		return "logical";
	},
	"grass_land_6_u2": function() {
		return "logical";
	},
	"grass_land_pierre": function() {
		return "logical";
	},
	"grass_land_6": function() {
		return "logical";
	},
	"EVENT_1_6": function() {
		return "logical";
	},
	// boss
	"grass_land_whispy": function() {
		return can_boss(1);
	},
	"EVENT_1_boss": function() {
		return can_boss(1);
	},
	// ////////////////////
	// Ripple Field
	// ////////////////////
	// 1
	"ripple_field_kamuribana": function() {
		if (has("Pitch") && has("Cleaning")) {
			return can_level(2);
		}
	},
	"ripple_field_1": function() {
		return can_level(2);
	},
	"EVENT_2_1": function() {
		return can_level(2);
	},
	// 2
	"ripple_field_2_u1": function() {
		if (can_level(2)) {
			return can_swim();
		}
	},
	"ripple_field_2_m1": function() {
		if (can_level(2)) {
			return can_swim();
		}
	},
	"ripple_field_bakasa": function() {
		if (has("Kine") && has("Parasol")) {
			return can_level(2);
		}
	},
	"ripple_field_2": function() {
		return can_level(2);
	},
	"EVENT_2_2": function() {
		return can_level(2);
	},
	// 3
	"ripple_field_3_u1": function() {
		if (has("Cutter") || has("Spark")) {
			return can_level(2);
		}
	},
	"ripple_field_3_m1": function() {
		return can_level(2);
	},
	"ripple_field_elieel": function() {
		return can_level(2);
	},
	"ripple_field_3": function() {
		return can_level(2);
	},
	"EVENT_2_3": function() {
		return can_level(2);
	},
	// 4
	"ripple_field_4_u1": function() {
		if (has("Stone")) {
			return can_level(2);
		}
	},
	"ripple_field_4_m1": function() {
		return can_level(2);
	},
	"ripple_field_4_m2": function() {
		if (has("Stone")) {
			return can_level(2);
		}
	},
	"ripple_field_toad": function() {
		if (has("Needle")) {
			return can_level(2);
		}
	},
	"ripple_field_4": function() {
		return can_level(2);
	},
	"EVENT_2_4": function() {
		return can_level(2);
	},
	// 5
	"ripple_field_5_u1": function() {
		if (has("Burning") && has("Stone") && can_level(2)) {
			return can_swim();
		}
	},
	"ripple_field_5_m1": function() {
		if (can_level(2)) {
			return can_swim();
		}
	},
	"ripple_field_5_m2": function() {
		if (has("Burning") && has("Stone") && can_level(2)) {
			return can_swim();
		}
	},
	"ripple_field_mama_pitch": function() {
		if (has("Burning") && has("Stone") && has("Pitch") && can_level(2)) {
			return can_swim();
		}
	},
	"ripple_field_5": function() {
		if (can_level(2)) {
			return can_swim();
		}
	},
	"EVENT_2_5": function() {
		if (can_level(2)) {
			return can_swim();
		}
	},
	// 6
	"ripple_field_hb002": function() {
		return can_level(2);
	},
	"ripple_field_6": function() {
		return can_level(2);
	},
	"EVENT_2_6": function() {
		return can_level(2);
	},
	// boss
	"ripple_field_acro": function() {
		return can_boss(2);
	},
	"EVENT_2_boss": function() {
		return can_boss(2);
	},
	// ////////////////////
	// Sand Canyon
	// ////////////////////
	// 1
	"sand_canyon_1_u1": function() {
		return can_level(3);
	},
	"sand_canyon_mushrooms": function() {
		return can_level(3);
	},
	"sand_canyon_1": function() {
		return can_level(3);
	},
	"EVENT_3_1": function() {
		return can_level(3);
	},
	// 2
	"sand_canyon_2_u1": function() {
		return can_level(3);
	},
	"sand_canyon_2_m1": function() {
		return can_level(3);
	},
	"sand_canyon_auntie": function() {
		if (has("Cleaning")) {
			return can_level(3);
		}
	},
	"sand_canyon_2": function() {
		return can_level(3);
	},
	"EVENT_3_2": function() {
		return can_level(3);
	},
	// 3
	"sand_canyon_caramello": function() {
		return can_level(3);
	},
	"sand_canyon_3": function() {
		return can_level(3);
	},
	"EVENT_3_3": function() {
		return can_level(3);
	},
	// 4
	"sand_canyon_4_u1": function() {
		if (has("Cleaning")) {
			return can_level(3);
		}
	},
	"sand_canyon_4_m1": function() {
		return can_level(3);
	},
	"sand_canyon_4_m2": function() {
		if (has("Needle")) {
			return can_level(3);
		}
	},
	"sand_canyon_hikari": function() {
		return can_level(3);
	},
	"sand_canyon_4": function() {
		return can_level(3);
	},
	"EVENT_3_4": function() {
		return can_level(3);
	},
	// 5
	"sand_canyon_5_u1": function() {
		return can_level(3);
	},
	"sand_canyon_5_u2": function() {
		if (has("Ice")) {
			if (has("Rick") || has("Coo") || has("Chuchu") || has("Pitch") || has("Nago")) {
				return can_level(3);
			}
		}
	},
	"sand_canyon_5_u3": function() {
		if (has("Ice")) {
			if (has("Rick") || has("Coo") || has("Chuchu") || has("Pitch") || has("Nago")) {
				return can_level(3);
			}
		}
	},
	"sand_canyon_5_u4": function() {
		if (has("Ice")) {
			if (has("Rick") || has("Coo") || has("Chuchu") || has("Pitch") || has("Nago")) {
				return can_level(3);
			}
		}
	},
	"sand_canyon_5_m1": function() {
		return can_level(3);
	},
	"sand_canyon_nyupun": function() {
		if (has("Chuchu") && has("Cutter")) {
			return can_level(3);
		}
	},
	"sand_canyon_5": function() {
		if (has("Cutter")) {
			return can_level(3);
		}
	},
	"EVENT_3_5": function() {
		if (has("Cutter")) {
			return can_level(3);
		}
	},
	// 6
	"sand_canyon_rob": function() {
		if (has("Coo") && has("Stone") && can_level(3)) {
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
		return can_level(3);
	},
	"EVENT_3_6": function() {
		return can_level(3);
	},
	// boss
	"sand_canyon_poncon": function() {
		return can_boss(3);
	},
	"EVENT_3_boss": function() {
		return can_boss(3);
	},
	// ////////////////////
	// Cloudy Park
	// ////////////////////
	// 1
	"cloudy_park_1_u1": function() {
		return can_level(4);
	},
	"cloudy_park_1_m1": function() {
		return can_level(4);
	},
	"cloudy_park_hibanamodoki": function() {
		if (has("Coo") && has("Cleaning")) {
			return can_level(4);
		}
	},
	"cloudy_park_1": function() {
		return can_level(4);
	},
	"EVENT_4_1": function() {
		return can_level(4);
	},
	// 2
	"cloudy_park_piyokeko": function() {
		if (has("Needle")) {
			return can_level(4);
		}
	},
	"cloudy_park_2": function() {
		return can_level(4);
	},
	"EVENT_4_2": function() {
		return can_level(4);
	},
	// 3
	"cloudy_park_mrball": function() {
		return can_level(4);
	},
	"cloudy_park_3": function() {
		return can_level(4);
	},
	"EVENT_4_3": function() {
		return can_level(4);
	},
	// 4
	"cloudy_park_4_u1": function() {
		return can_level(4);
	},
	"cloudy_park_4_m1": function() {
		return can_level(4);
	},
	"cloudy_park_mikarin": function() {
		if (has("Coo")) {
			return can_level(4);
		}
	},
	"cloudy_park_4": function() {
		return can_level(4);
	},
	"EVENT_4_4": function() {
		return can_level(4);
	},
	// 5
	"cloudy_park_5_m1": function() {
		return can_level(4);
	},
	"cloudy_park_pick": function() {
		if (has("Rick")) {
			return can_level(4);
		}
	},
	"cloudy_park_5": function() {
		return can_level(4);
	},
	"EVENT_4_5": function() {
		return can_level(4);
	},
	// 6
	"cloudy_park_6_u1": function() {
		if (has("Cutter")) {
			return can_level(4);
		}
	},
	"cloudy_park_hb007": function() {
		return can_level(4);
	},
	"cloudy_park_6": function() {
		return can_level(4);
	},
	"EVENT_4_6": function() {
		return can_level(4);
	},
	// boss
	"cloudy_park_ado": function() {
		return can_boss(4);
	},
	"EVENT_4_boss": function() {
		return can_boss(4);
	},
	// ////////////////////
	// Iceberg
	// ////////////////////
	// 1
	"iceberg_kogoesou": function() {
		if (has("Burning")) {
			return can_level(5);
		}
	},
	"iceberg_1": function() {
		return can_level(5);
	},
	"EVENT_5_1": function() {
		return can_level(5);
	},
	// 2
	"iceberg_samus": function() {
		if (has("Ice")) {
			return can_level(5);
		}
	},
	"iceberg_2": function() {
		return can_level(5);
	},
	"EVENT_5_2": function() {
		return can_level(5);
	},
	// 3
	"iceberg_3_m1": function() {
		return can_level(5);
	},
	"iceberg_kawasaki": function() {
		return can_level(5);
	},
	"iceberg_3": function() {
		return can_level(5);
	},
	"EVENT_5_3": function() {
		return can_level(5);
	},
	// 4
	"iceberg_name": function() {
		if (has("Coo") && has("Burning") && has("Chuchu")) {
			return can_level(5);
		}
	},
	"iceberg_4": function() {
		if (has("Burning")) {
			return can_level(5);
		}
	},
	"EVENT_5_4": function() {
		if (has("Burning")) {
			return can_level(5);
		}
	},
	// 5
	"iceberg_5_u1": function() {
		return can_level(5);
	},
	"iceberg_5_u2": function() {
		return can_level(5);
	},
	"iceberg_5_u3": function() {
		return can_level(5);
	},
	"iceberg_shiro": function() {
		if (has("Nago")) {
			return can_level(5);
		}
	},
	"iceberg_5": function() {
		return can_level(5);
	},
	"EVENT_5_5": function() {
		return can_level(5);
	},
	// 6
	"iceberg_6_u1": function() {
		return can_level(5);
	},
	"iceberg_6_m1": function() {
		return can_level(5);
	},
	"iceberg_angel": function() {
		if (has("Spark") && has("Stone") && has("Parasol") && has("Ice") && has("Cutter") && has("Cleaning") && has("Burning") && has("Needle")) {
			return can_level(5);
		}
	},
	"iceberg_6": function() {
		return can_level(5);
	},
	"EVENT_5_6": function() {
		return can_level(5);
	},
	// boss
	"iceberg_dedede": function() {
		return can_boss(5);
	},
	"EVENT_5_boss": function() {
		return can_boss(5);
	},
	// ////////////////////
	// Hyper Zone
	// ////////////////////
	"EVENT_hyper_zone": function() {
		return has("EVENT_5_boss");
	}
}