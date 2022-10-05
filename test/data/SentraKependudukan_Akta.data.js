import Getid from '$root/helper/get-id-akta';

const id_akta = await Getid()

export const VALID_ADD_AKTA = {
    'is_dengan_ortu': '1',
    'm_user_id': '1',
    'jenis_permohonan': 'bikin baru ',
    'nik_pelapor': '555555',
    'nama_pelapor': 'TES AKTA LAHIR BARU',
    'umur_pelapor': 15,
    'jenis_kelamin_pelapor': 'laki-laki ',
    'pekerjaan_pelapor': 'tukang lapor ',
    'alamat_pelapor': 'jl. rumah pelapor ',
    'provinsi_pelapor_id': '35',
    'kota_pelapor_id': '3507',
    'kecamatan_pelapor_id': '350721',
    'kelurahan_pelapor_id': '3507212009',
    'no_kk': '21212',
    'nama_kepala_keluarga': 'si bapak',
    'provinsi_id': '35',
    'kota_id': '3507',
    'kecamatan_id': '350721',
    'kelurahan_id': '3507212009',
    'nama_anak': 'si anak',
    'jenis_kelamin_anak': 'laki-laki',
    'tempat_dilahirkan': 'gubuk sentosa',
    'tempat_lahir': 'malang',
    'tanggal_lahir': '1999-10-05',
    'pukul_kelahiran': '19.55',
    'jenis_kelahiran': 'tunggal',
    'penolong_kelahiran': 'dokter',
    'kelahiran_ke': 1,
    'berat': 5.6,
    'panjang': 50.7,
    'no_nik_ibu': '12345',
    'nama_ibu': 'si ibu',
    'tanggal_lahir_ibu': '1979-10-05',
    'pekerjaan_ibu': 'ibu rumah tangga  ',
    'alamat_ibu': 'jl. rumah keluarga ',
    'provinsi_ibu_id': '35',
    'kota_ibu_id': '3507',
    'kecamatan_ibu_id': '350721',
    'kelurahan_ibu_id': '3507212009',
    'kewarganegaraan_ibu': 'WNA',
    'kebangsaan_ibu': 'Amsterdam',
    'tanggal_pernikahan_ibu': '1998-10-20',
    'no_nik_ayah': '54321',
    'nama_ayah': 'si ayah',
    'tanggal_lahir_ayah': '1981-03-15',
    'pekerjaan_ayah': 'lainnya',
    'pekerjaan_ayah_lainnya': 'korupsi',
    'alamat_ayah': 'jl. rumah keluarga',
    'provinsi_ayah_id': '35',
    'kota_ayah_id': '3507',
    'kecamatan_ayah_id': '350721',
    'kelurahan_ayah_id': '3507212009',
    'kewarganegaraan_ayah': 'WNI',
    'kebangsaan_ayah': 'Indonesia',
    'lokasi_id': '350721',
    'provinsi_ibu': 'Jawa Timur',
    'kota_ibu': 'Malang',
    'kecamatan_ibu': 'Wagir',
    'kelurahan_ibu': 'Sidorahayu',
    'provinsi_ayah': 'Jawa Timur',
    'kota_ayah': 'Malang',
    'kecamatan_ayah': 'Wagir',
    'kelurahan_ayah': 'Sidorahayu',
    'provinsi_pelapor': 'Jawa Timur',
    'kota_pelapor': 'Malang',
    'kecamatan_pelapor': 'Wagir',
    'kelurahan_pelapor': 'Sidorahayu',
    'provinsi_kk': 'Jawa Timur',
    'kota_kk': 'Malang',
    'kecamatan_kk': 'Wagir',
    'kelurahan_kk': 'Sidorahayu',
    'tempat_kedatangan': 'Wagir',
    'client_id': '123',
    'created_by': 'Rizqi'
  };


  export const VALID_UPDATE_AKTA = {
    'is_dengan_ortu': '1',
    'm_user_id': '9',
    'nik_pelapor': '555555',
    'nama_pelapor': 'ahmad',
    'umur_pelapor': '15',
    'jenis_kelamin_pelapor': 'laki-laki',
    'pekerjaan_pelapor': 'tukang lapor',
    'alamat_pelapor': 'jl. rumah pelapor',
    'provinsi_pelapor_id': '35',
    'kota_pelapor_id': '3507',
    'kecamatan_pelapor_id': '3507210',
    'kelurahan_pelapor_id': '3507210009',
    'no_kk': '21212',
    'nama_kepala_keluarga': 'si bapak',
    'kode_wilayah': '35',
    'kota_id': '3507',
    'kecamatan_id': '3507210',
    'kelurahan_id': '3507210009',
    'nama_anak': 'si anak',
    'jenis_kelamin_anak': 'laki-laki',
    'tempat_dilahirkan': 'gubuk sentosa',
    'tempat_lahir': 'malang',
    'tanggal_lahir': '1999-10-05',
    'pukul_kelahiran': '19.55',
    'jenis_kelahiran': 'tunggal',
    'penolong_kelahiran': 'dokter',
    'berat': '5.6',
    'panjang': '50.7',
    'no_nik_ibu': '12345',
    'nama_ibu': 'si ibu',
    'tanggal_lahir_ibu': '1979-10-05',
    'pekerjaan_ibu': 'ibu rumah tangga',
    'alamat_ibu': 'jl. rumah keluarga',
    'provinsi_ibu_id': '35',
    'kota_ibu_id': '3507',
    'kecamatan_ibu_id': '3507210',
    'kelurahan_ibu_id': '3507210009',
    'kewarganegaraan_ibu': 'WNA',
    'kebangsaan_ibu': 'Amsterdam',
    'tanggal_pernikahan_ibu': '1998-10-20',
    'no_nik_ayah': '54321',
    'nama_ayah': 'si ayah',
    'tanggal_lahir_ayah': '1981-03-15',
    'pekerjaan_ayah': 'Notaris',
    'alamat_ayah': 'jl. rumah keluarga',
    'provinsi_ayah_id': '35',
    'kota_ayah_id': '3507',
    'kecamatan_ayah_id': '3507210',
    'kelurahan_ayah_id': '3507210009',
    'kewarganegaraan_ayah': 'WNI',
    'kebangsaan_ayah': 'Indonesia',
    'lokasi_id': '3507210'
  };

  export const VALID_UPDATE_JADWAL = [
    {
      "id": id_akta,
      "tanggal_kedatangan": "2022-12-12"
    }
  ];

  export const VALID_UPDATE_STATUS_VERIFIKASI = {
    'updatebyid': '1',
    'notes': 'lanjut'
};

export const VALID_UPDATE_STATUS = {
    'status': 'dibatalkan'
};

export const VALID_UPDATE_STATUS_KONFIRMASI = {
    'updatebyid': '1',
    'jam_kedatangan': '12:12:12'
};

export const INVALID_UPDATE_STATUS_KONFIRMASI = {
    'updatebyid': '1',
    'jam_kedatangan': '11:12:12'
};