import React, { useState } from 'react';

function App() {
  const [items, setItems] = useState([
    { id: 1, nama: 'Budi Santoso', nim: '12345678', jurusan: 'Teknik Informatika' },
    { id: 2, nama: 'Siti Aminah', nim: '87654321', jurusan: 'Sistem Informasi' },
  ]);

  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [jurusan, setJurusan] = useState('');
  const [editId, setEditId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nama || !nim || !jurusan) {
      alert('Semua kolom wajib diisi, lur!');
      return;
    }

    if (editId !== null) {
      // Update data
      setItems(items.map(item => item.id === editId ? { ...item, nama, nim, jurusan } : item));
      setEditId(null);
    } else {
      // Tambah data baru
      const newItem = { id: Date.now(), nama, nim, jurusan };
      setItems([...items, newItem]);
    }

    setNama('');
    setNim('');
    setJurusan('');
  };

  const handleEdit = (item) => {
    setEditId(item.id);
    setNama(item.nama);
    setNim(item.nim);
    setJurusan(item.jurusan);
  };

  const handleDelete = (id) => {
    if (window.confirm('Yakin mau hapus data ini, lur?')) {
      setItems(items.filter(item => item.id !== id));
    }
  };

  return (
    <div className="container py-5">
      {/* Header Dashboard */}
      <div className="row mb-4">
        <div className="col-12">
          <div className="p-4 bg-primary text-white rounded shadow-sm">
            <h2 className="fw-bold mb-1">Dashboard Responsi</h2>
            <p className="mb-0">Sistem Manajemen Data Mahasiswa (React + Bootstrap)</p>
          </div>
        </div>
      </div>

      {/* Konten Utama */}
      <div className="row">
        {/* Kolom Form Input (Kiri) */}
        <div className="col-md-4 mb-4">
          <div className="card shadow-sm border-0 p-3">
            <h4 className="fw-bold mb-3 text-secondary">
              {editId !== null ? 'Edit Data' : 'Tambah Data'}
            </h4>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label fw-semibold">Nama Lengkap</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={nama} 
                  onChange={(e) => setNama(e.target.value)} 
                  placeholder="Contoh: Andi"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">NIM</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={nim} 
                  onChange={(e) => setNim(e.target.value)} 
                  placeholder="Contoh: 12345"
                />
              </div>
              <div className="mb-3">
                <label className="form-label fw-semibold">Jurusan</label>
                <input 
                  type="text" 
                  className="form-control" 
                  value={jurusan} 
                  onChange={(e) => setJurusan(e.target.value)} 
                  placeholder="Contoh: Informatika"
                />
              </div>
              <button type="submit" className="btn btn-success w-100 fw-bold">
                {editId !== null ? 'Simpan Perubahan' : 'Tambah Data'}
              </button>
              {editId !== null && (
                <button 
                  type="button" 
                  className="btn btn-secondary w-100 mt-2 fw-bold"
                  onClick={() => { setEditId(null); setNama(''); setNim(''); setJurusan(''); }}
                >
                  Batal Edit
                </button>
              )}
            </form>
          </div>
        </div>

        {/* Kolom Tabel Data (Kanan) */}
        <div className="col-md-8">
          <div className="card shadow-sm border-0 p-3">
            <h4 className="fw-bold mb-3 text-secondary">Daftar Data Tersimpan</h4>
            <div className="table-responsive">
              <table className="table table-striped table-bordered align-middle">
                <thead className="table-dark">
                  <tr>
                    <th>No</th>
                    <th>Nama</th>
                    <th>NIM</th>
                    <th>Jurusan</th>
                    <th className="text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {items.length > 0 ? (
                    items.map((item, index) => (
                      <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td className="fw-semibold">{item.nama}</td>
                        <td>{item.nim}</td>
                        <td>{item.jurusan}</td>
                        <td className="text-center">
                          <button 
                            className="btn btn-warning btn-sm me-2 fw-bold text-white"
                            onClick={() => handleEdit(item)}
                          >
                            Edit
                          </button>
                          <button 
                            className="btn btn-danger btn-sm fw-bold"
                            onClick={() => handleDelete(item.id)}
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="5" className="text-center text-muted py-4">
                        Belum ada data tersimpan.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;