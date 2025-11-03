import type {ICart, IPaginatedComponents} from "../types/index.ts";

export const COMPONENTS_MOCK: IPaginatedComponents = {
  total: 3,
  items: [
    {
		id:          1,
		title:       "Одиночный сервер базы данных",
		type:        "Одиночный сервер",
		mtbf:        8760,
		mttr:        2,
		available:   0.999771,
		img:         "http://localhost:9000/failivercheck/svg/database.svg",
		description: "Один экземпляр сервера, содержащий базу данных.  Подвержен простоям при отказах и обслуживании.",
	},
	{
		id:          2,
		title:       "Балансировщик нагрузки (активный/пассивный)",
		type:        "Балансировщик",
		mtbf:        43800,
		mttr:        4,
		available:   0.999909,
		img:         "http://localhost:9000/failivercheck/svg/loader.svg",
		description: "Два балансировщика нагрузки, один активный, другой пассивный. При отказе активного, пассивный автоматически занимает его место.",
	},
	{
		id:          3,
		title:       "Балансировщик нагрузки (геораспределенный)",
		type:        "Балансировщик",
		mtbf:        52560,
		mttr:        3,
		available:   0.999943,
		img:         "http://localhost:9000/failivercheck/svg/loader.svg",
		description: "Три балансировщика нагрузки, размещенных в разных географических регионах. Распределяют нагрузку и обеспечивают отказоустойчивость даже при выходе из строя целого региона.",
	},
	{
		id:          4,
		title:       "Балансировщик нагрузки (VRRP)",
		type:        "Балансировщик",
		mtbf:        43800,
		mttr:        4,
		available:   0.999909,
		img:         "http://localhost:9000/failivercheck/svg/loader.svg",
		description: "Два балансировщика нагрузки, использующие VRRP (Virtual Router Redundancy Protocol) для обеспечения отказоустойчивости. Один активен, другой - в режиме ожидания.",
	},
  ],
};

export const BUCKET_MOCK: ICart = {
  sys_calculation_id: -1,
  components_count: 0
}