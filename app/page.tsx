import { Roboto_Condensed } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CurrencyTable from "@/components/CurrencyTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const roboto_condensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["400"],
});

export default function page() {
  return (
    <>
      {/* Bagian Header */}
      <header className="relative w-full h-60 ">
        <Image
          src={"/image/bg.jpg"}
          alt="logo uti"
          layout="fill"
          objectFit="cover"
          className="blur-sm "
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center z-10 text-white">
          <h1
            className={`${roboto_condensed.className} pt-5px w-30% h-20% text-center text-3xl font-bold text-white shadow-color2 bg-color2 hover:bg-black rounded-lg`}
            style={{
              textShadow: "3px 2px 3px black",
            }}
          >
            Money Changer
          </h1>
          <h1
            className={`${roboto_condensed.className} mt-20px text-3xl font-bold text-white text-center`}
          >
            PT Bina Sukses Valasindo
          </h1>
          <div className="">
            <h1
              className={`${roboto_condensed.className} text-center font-light`}
            >
              Layanan Penukaran Mata uang
            </h1>
          </div>
        </div>
      </header>
      {/* Buat area content atau isi */}
      <section className="mt-40px" id="about">
        <div className="flex flex-col items-center sm:flex-row sm:gap-6 sm:justify-center">

          <div className="sm:w-1/2 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center">
              <h1
                className={`${roboto_condensed.className} text-2xl font-bold text-center mb-4`}
              >
                About
              </h1>
              <p className={`${roboto_condensed.className} text-justify text-sm text-center sm:text-left`}>
              Untuk beberapa mata uang, terdapat perbedaan nilai tukar yang berlaku untuk denominasi yang berbeda. Untuk versi lama dari mata uang tertentu, kami tidak dapat melakukan penukaran. Setelah melalui beberapa proses pemeriksaan (pemeriksaan mesin, pemeriksaan dengan sinar UV, dan pemeriksaan manual), nilai tukar yang berbeda mungkin berlaku tergantung pada kondisi mata uang tersebut.
              </p>
            </div>
          </div>
        </div>
        <div>
          <main style={{ padding: "20px" }}>
            <h1>Currency Rates</h1>
            <CurrencyTable />
          </main>
        </div>


        {/* Gallery */}

        <h1 className="text-center font-bold mt-50px" id="gallery">
  GALERI
</h1>
<hr className="border-0 bg-black h-1 rounded-full mb-4 mx-45%" />

<div className="grid grid-cols-3 grid-rows-2 gap-4 justify-items-center items-center mx-20%">
  <Image
    src={"/image/ch.jpg"}
    width={170}
    height={170}
    alt="bsv"
    className="hover:scale-125 p-1 border-2 border-black"
  />
  <Image
    src={"/image/papan.jpg"}
    width={170}
    height={170}
    alt="bsv"
    className="hover:scale-125 p-1 border-2 border-black"
  />
  <Image
    src={"/image/dalam.jpg"}
    width={170}
    height={170}
    alt="bsv"
    className="hover:scale-125 p-1 border-2 border-black"
  />
  <Image
    src={"/image/dekat.jpg"}
    width={170}
    height={170}
    alt="bsv"
    className="hover:scale-125 p-1 border-2 border-black"
  />
  <Image
    src={"/image/in.jpg"}
    width={170}
    height={170}
    alt="bsv"
    className="hover:scale-125 p-1 border-2 border-black"
  />
  <Image
    src={"/image/360.jpg"}
    width={170}
    height={170}
    alt="bsv"
    className="hover:scale-125 p-1 border-2 border-black"
  />
</div>
        {/* Bagian Footer */}
        <footer className="p-8 bg-yellow-50" id="kontak">
          <h1 className="text-center text-xl font-bold mb-6">Contact</h1>

          {/* Flex container untuk peta dan tabel */}
          <div className="flex flex-wrap sm:flex-nowrap justify-center gap-8 mb-12">
            {/* Bagian Gambar Peta */}
            <div className="flex-1 max-w-xs">
              <a href="https://www.google.com/maps/@-5.4175213,105.2535379,3a,52.3y,114.17h,75.41t/data=!3m7!1e1!3m5!1s-SfJaTpjSSUMmWOwW3DTCQ!2e0!6shttps:%2F%2Fstreetviewpixels-pa.googleapis.com%2Fv1%2Fthumbnail%3Fcb_client%3Dmaps_sv.tactile%26w%3D900%26h%3D600%26pitch%3D14.592910907805418%26panoid%3D-SfJaTpjSSUMmWOwW3DTCQ%26yaw%3D114.17165981848831!7i16384!8i8192?entry=ttu&g_ep=EgoyMDI0MTEyNC4xIKXMDSoASAFQAw%3D%3D">
                <Image
                  src={"/image/petaa.png"}
                  alt="Peta Lokasi"
                  width={350}
                  height={350}
                  className="rounded-md shadow-lg bg"
                />
              </a>
              <div className="text-center sm:text-left mb-6 sm:max-w-lg mx-auto">
                <h1
                  className={`${roboto_condensed.className} text-2xl font-semibold mb-2 mt-5px`}
                >
                  Information Contact
                </h1>
                <h2
                  className={`${roboto_condensed.className} font-medium text-lg`}
                >
                  Money Changer PT. Bina Sukses Valasindo
                </h2>
                <p className={`${roboto_condensed.className} text-xs`}>
                  Jl. Kartini No 51, 50 meter sebelum mall, Kartini, Kec. Tj.
                  Karang Pusat, Kota Bandar Lampung, Lampung 35116, Indonesia
                </p>
                <div className="flex mt-2">
                  <Link
                    href="https://wa.me/6285269656868"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="w-6 h-6 text-green-500"
                      title="WhatsApp"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bagian Tabel Jam Buka */}
            <div className="flex-1 max-w-xs">
  <table className="min-w-full table-auto border-collapse border border-gray-300 shadow-md">
    <thead>
      <tr className="bg-gray-200">
        <th
          className={`${roboto_condensed.className} px-4 py-2 text-left font-semibold border border-black text-black-500`}
        >
          Hari
        </th>
        <th
          className={`${roboto_condensed.className} px-4 py-2 text-left font-semibold border border-black text-black-500`}
        >
          Jam Buka
        </th>
      </tr>
    </thead>
    <tbody>
      {/* Row 1 */}
      <tr className="odd:bg-gray-50">
        <td className="px-4 py-2 border border-black">Senin</td>
        <td className="px-4 py-2 border border-black">09:00 - 16:30</td>
      </tr>
      {/* Row 2 */}
      <tr className="odd:bg-gray-50">
        <td className="px-4 py-2 border border-black">Selasa</td>
        <td className="px-4 py-2 border border-black">09:00 - 16:30</td>
      </tr>
      {/* Row 3 */}
      <tr className="odd:bg-gray-50">
        <td className="px-4 py-2 border border-black">Rabu</td>
        <td className="px-4 py-2 border border-black">09:00 - 16:30</td>
      </tr>
      {/* Row 4 */}
      <tr className="odd:bg-gray-50">
        <td className="px-4 py-2 border border-black">Kamis</td>
        <td className="px-4 py-2 border border-black">09:00 - 16:30</td>
      </tr>
      {/* Row 5 */}
      <tr className="odd:bg-gray-50">
        <td className="px-4 py-2 border border-black">Jumat</td>
        <td className="px-4 py-2 border border-black">09:00 - 16:30</td>
      </tr>
      {/* Row 6 */}
      <tr className="odd:bg-gray-50">
        <td className="px-4 py-2 border border-black">Sabtu</td>
        <td className="px-4 py-2 border border-black">09:00 - 14:00</td>
      </tr>
      {/* Row 7 */}
      <tr className="odd:bg-gray-50">
        <td className="px-4 py-2 border border-black">Minggu</td>
        <td className="px-4 py-2 border border-black">Tutup</td>
      </tr>
    </tbody>
  </table>
</div>
          </div>
          <div className="bg-color2 w-full">
            <p
              className={`${roboto_condensed} text-center text-white p-10px text-5px`}
            >
              @PT. Bina Sukses Valasindo
            </p>
          </div>
          {/* Bagian Informasi Kontak */}
        </footer>
      </section>
    </>
  );
}
