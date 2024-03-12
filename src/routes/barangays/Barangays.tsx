import Divider from "../home/components/Divider";
import brgyLogo from "../../assets/brgy-logos.png";

interface BarangayInterface {
  name: string;
  description: string;
}

const barangays: BarangayInterface[] = [
  { name: "Altura Bata", description: "Description for Altura Bata" },
  { name: "Altura Matanda", description: "Description for Altura Matanda" },
  { name: "Altura-South", description: "Description for Altura-South" },
  { name: "Ambulong", description: "Description for Ambulong" },
  { name: "Bañadero", description: "Description for Bañadero" },
  { name: "Bagbag", description: "Description for Bagbag" },
  { name: "Bagumbayan", description: "Description for Bagumbayan" },
  { name: "Balele", description: "Description for Balele" },
  {
    name: "Banjo East (Bungkalot)",
    description: "Description for Banjo East (Bungkalot)",
  },
  {
    name: "Banjo West (Banjo Laurel)",
    description: "Description for Banjo West (Banjo Laurel)",
  },
  { name: "Bilog-bilog", description: "Description for Bilog-bilog" },
  { name: "Boot", description: "Description for Boot" },
  { name: "Cale", description: "Description for Cale" },
  { name: "Darasa", description: "Description for Darasa" },
  { name: "Gonzales", description: "Description for Gonzales" },
  { name: "Hidalgo", description: "Description for Hidalgo" },
  { name: "Janopol", description: "Description for Janopol" },
  { name: "Janopol Oriental", description: "Description for Janopol Oriental" },
  { name: "Laurel", description: "Description for Laurel" },
  { name: "Luyos", description: "Description for Luyos" },
  { name: "Mabini", description: "Description for Mabini" },
  { name: "Malaking Pulo", description: "Description for Malaking Pulo" },
  { name: "Maria Paz", description: "Description for Maria Paz" },
  { name: "Maugat", description: "Description for Maugat" },
  { name: "Montaña (Ik-ik)", description: "Description for Montaña (Ik-ik)" },
  { name: "Natatas", description: "Description for Natatas" },
  {
    name: "Pagaspas (Balokbalok)",
    description: "Description for Pagaspas (Balokbalok)",
  },
  { name: "Pantay Matanda", description: "Description for Pantay Matanda" },
  { name: "Pantay Bata", description: "Description for Pantay Bata" },
  {
    name: "Poblacion Barangay 1",
    description: "Description for Poblacion Barangay 1",
  },
  {
    name: "Poblacion Barangay 2",
    description: "Description for Poblacion Barangay 2",
  },
  {
    name: "Poblacion Barangay 3",
    description: "Description for Poblacion Barangay 3",
  },
  {
    name: "Poblacion Barangay 4",
    description: "Description for Poblacion Barangay 4",
  },
  {
    name: "Poblacion Barangay 5",
    description: "Description for Poblacion Barangay 5",
  },
  {
    name: "Poblacion Barangay 6",
    description: "Description for Poblacion Barangay 6",
  },
  {
    name: "Poblacion Barangay 7",
    description: "Description for Poblacion Barangay 7",
  },
  { name: "Sala", description: "Description for Sala" },
  { name: "Sambat", description: "Description for Sambat" },
  { name: "San Jose", description: "Description for San Jose" },
  {
    name: "Santol (Doña Jacoba Garcia)",
    description: "Description for Santol (Doña Jacoba Garcia)",
  },
  { name: "Santor", description: "Description for Santor" },
  { name: "Sulpoc", description: "Description for Sulpoc" },
  { name: "Suplang", description: "Description for Suplang" },
  { name: "Talaga", description: "Description for Talaga" },
  { name: "Tinurik", description: "Description for Tinurik" },
  { name: "Trapiche", description: "Description for Trapiche" },
  { name: "Ulango", description: "Description for Ulango" },
  { name: "Wawa", description: "Description for Wawa" },
];

const Barangays = () => {
  return (
    <div className="container max-h-full px-20 mx-auto">
      <Divider text="Cities in Tanauan" />
      <img src={brgyLogo} alt="Baranggay Logo" className="h-screen mx-auto" />
      <div className="flex flex-wrap justify-center gap-4 p-5 mx-auto">
        {barangays.map((city, index) => (
          <div
            className="flex items-center p-4 bg-white border rounded-lg shadow-md w-80"
            key={index}
          >
            <div>
              <h2 className="text-lg font-semibold">{city.name}</h2>
              <p className="text-sm text-gray-600">{city.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Barangays;
