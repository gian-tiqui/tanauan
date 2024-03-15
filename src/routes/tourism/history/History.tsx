import dabg from "../../../assets/status-bg.png";
interface Info {
  title: string;
  content: { heading: string; details: string[] }[];
}

const tourismInfos: Info[] = [
  {
    title: "HISTORY AND CULTURE",
    content: [
      {
        heading: "HOW TANAUAN GOT ITS NAME",
        details: [
          "There are two versions of the probable origin of the name of Tanauan. One version suggests that Tanauan derived its name from the Tagalog term “tanaw” meaning “to look through (perhaps a window)”. It is believed that the name came from a fortress with a watchtower built by the Augustinian friars and natives. The watchtower allowed them to monitor incoming “champans” or boats of traders or pirates entering through the Pansipit River, Taal Lake. From this tower, one had a clear view (tanaw) of the lake and of the vast plains and rolling hills.",
          "On the other hand, the National Historical Commission suggests that the town was named after a shrub called “tanawa” which grew abundantly in the area and on the shores of “Lake Bonbon” (Taal Lake) during the town’s early history.",
        ],
      },
      {
        heading: "HISTORICAL DEVELOPMENT",
        details: [
          "The town of Tanauan was established on its present location in 1754, having been transferred from the fringe of Taal Lake where it originally stood. It is believed that Tanauan, together with Sala, was originally founded in 1572 by the Augustinian missionaries who built a mission at the shore of a lake known then as Bonbon (now Taal). The town, however, was totally destroyed during the most impressive and catastrophic historically-recorded eruption of Taal Volcano in 1754. Together with the community of Sala, the residents of Tanauan were relocated to safer places. Tanauan moved to Bañadero, and then to its present location. Sala, on the other hand, transferred from its original site to where it is now located. Sala subsequently became a barangay of Tanauan.",
          "Throughout history, Tanaueños have displayed characteristics of personal independence and nationalism. The town is considered the cradle of noble heroes because of the contributions to the revolutionary movement of its sons—the most notable is Apolinario Mabini, the “Brains of the Revolution”. The City also produced political leaders like the great statesman Former Pres. Jose P. Laurel and Jose P. Laurel V, Modesto Castillo, and Nicolas Gonzales who served as governors of Batangas.",
          "The present location of the seat of the City Government of Tanauan was established in March, 1960. Prior to this, the municipal offices occupied a concrete building in the eastern end of Mabini Avenue at the Poblacion, in front of the present Catholic Church and the Modesto Castillo Cultural Center. The old municipal building that was destroyed during World War II was reconstructed and now houses the city library, social hall, and city museum.",
          "In 1996, Tanauan became a first-class municipality and five years after, it became a city by virtue of Republic Act 9005, otherwise known as “An Act Converting the Municipality of Tanauan, Province of Batangas into a Component City to be known as the City of Tanauan” into law by President Gloria Macapagal-Arroyo last February 2, 2001. This was conferred through a plebiscite on March 10, 2001, which duly ratified and approved the cityhood of Tanauan.",
        ],
      },
      {
        heading: "TANAUAN AS A CITY",
        details: [
          "Tanauan, one of the oldest town in the province of Batangas became a 1st class municipality in 1996 and eventually became a city by virtue of Republic Ac 9005, otherwise known as “An Act converting the Municipality of Tanauan into a Component City to be known as the City of Tanauan, enaceted on February 2, 2001. It was signed into law by then President Gloria Macapal Arroyo, was duly ratified and approved through a plebascite held on March 10, 2001.",
        ],
      },
    ],
  },
];

const History = () => {
  return (
    <div className="flex items-center justify-center p-10">
      <div
        className="bg-no-repeat bg-cover rounded-lg shadow-2xl p-7"
        style={{ backgroundImage: `url(${dabg})` }}
      >
        {tourismInfos.map((info, index) => (
          <div key={index}>
            <p className="text-3xl font-bold text-center my-14">{info.title}</p>
            {info.content.map((section, secIndex) => (
              <div
                className="max-w-2xl mx-auto text-center my-14"
                key={secIndex}
              >
                <p className="text-lg font-extrabold">{section.heading}</p>
                {section.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="mt-3 font-bold text-justify">
                    {detail}
                  </p>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;
