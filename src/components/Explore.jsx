import Card from './Card'

function Explore() {
  return (
    <div>
      <main id="explore">
        <div className="container">
          <h1 className="title-explore">Jelajahi Restoran</h1>

          <div className="list-restoran">
            <Card kota={"Bangkalan"} rating={"4.5"} nama={"Bebek Sinjay"}/>
            <Card kota={"Surabaya"} rating={"4.8"} nama={"Mie Gacoan"}/>
            <Card kota={"Sampang"} rating={"4.2"} nama={"Lumintu"}/>
            <Card kota={"Lamongan"} rating={"4.0"} nama={"Soto"}/>
            <Card kota={"Mojokerto"} rating={"4.6"} nama={"Ayam Bakar"}/>
            <Card kota={"Banyuwangi"} rating={"4.7"} nama={"Sate Madura"}/>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Explore