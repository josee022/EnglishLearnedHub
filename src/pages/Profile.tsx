import React, { useState, useEffect } from 'react';
import { useAuthContext } from '../context/AuthContext';
import { Button } from '../components/ui/Button';
import { Layout } from '../components/layout/Layout';
import { ConfirmDialog } from '../components/ui/ConfirmDialog';

import { getAuth, updateProfile, signOut, deleteUser } from 'firebase/auth';
const auth = getAuth();

async function updateProfileName(newName: string) {
  if (!auth.currentUser) throw new Error('No user');
  await updateProfile(auth.currentUser, { displayName: newName });
}

// Subir imagen a Cloudinary y devolver la URL
async function uploadImageToCloudinary(file: File): Promise<string> {
  const url = `https://api.cloudinary.com/v1_1/dksnj4jzq/image/upload`;
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'englishlearnedhub'); // Tu upload preset unsigned

  const res = await fetch(url, {
    method: 'POST',
    body: formData,
  });
  if (!res.ok) throw new Error('Error al subir imagen a Cloudinary');
  const data = await res.json();
  return data.secure_url; // URL de la imagen subida
}

// Actualiza el avatar en Auth y Firestore/contexto
async function updateProfilePhoto(file: File) {
  if (!auth.currentUser) throw new Error('No user');
  const url = await uploadImageToCloudinary(file);
  await updateProfile(auth.currentUser, { photoURL: url });
  return url;
}
async function deleteAccount() {
  if (!auth.currentUser) throw new Error('No user');
  await deleteUser(auth.currentUser);
}
async function logout() {
  await signOut(auth);
}


export const Profile: React.FC = () => {
  const { user, updateUserProfile } = useAuthContext();
  const [editing, setEditing] = useState(false);
  const [displayName, setDisplayName] = useState(user?.displayName || '');
  const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  // Información adicional
  const [profileLoading, setProfileLoading] = useState(true);
  const [profileEditing, setProfileEditing] = useState(false);
  const [birthDate, setBirthDate] = useState('');
  const [dni, setDni] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');

  // Confirm dialogs
  const [showFirstConfirm, setShowFirstConfirm] = useState(false);
  const [showSecondConfirm, setShowSecondConfirm] = useState(false);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
  async function fetchProfile() {
    if (!user?.uid) return;
    setProfileLoading(true);
    try {
      const mod = await import('../firebase/userProfile');
      const data = await mod.getExtendedUserProfile(user.uid);
      if (data) {
        setBirthDate(data.birthDate || '');
        setDni(data.dni || '');
        setGender(data.gender || '');
        setPhone(data.phone || '');
        setCountry(data.country || '');
      }
    } finally {
      setProfileLoading(false);
    }
  }
  fetchProfile();
}, [user?.uid]);

  const handleSave = async () => {
    setError(null);
    setSuccess(null);
    try {
      if (displayName !== user?.displayName) {
        await updateProfileName(displayName); // Firebase Auth
        await updateUserProfile({ displayName }); // Firestore y contexto global
      }
      setEditing(false);
      setSuccess('Nombre actualizado correctamente.');
    } catch {
      setError('Error al actualizar el nombre.');
    }
  };

const handleProfileSave = async () => {
  setError(null);
  setSuccess(null);
  if (!user?.uid) return;
  try {
    const mod = await import('../firebase/userProfile');
    await mod.setExtendedUserProfile(user.uid, {
      birthDate,
      dni,
      gender,
      phone,
      country,
    });
    setProfileEditing(false);
    setSuccess('Información adicional guardada.');
  } catch {
    setError('Error al guardar información adicional.');
  }
};

  const handlePhotoChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setUploading(true);
      setError(null);
      setSuccess(null);
      try {
        // Subir a Cloudinary y actualizar Auth y Firestore/contexto
        const url = await updateProfilePhoto(e.target.files[0]);
        setPhotoURL(url); // Actualiza el estado local
        await updateUserProfile({ photoURL: url }); // Guarda en Firestore/contexto
        setSuccess('Foto actualizada.');
      } catch {
        setError('Error al subir la foto.');
      } finally {
        setUploading(false);
      }
    }
  };

  // Nueva lógica de doble confirmación
  const handleDeleteAccount = async () => {
    setError(null);
    setSuccess(null);
    setDeleting(true);
    try {
      await deleteAccount();
      setSuccess('Cuenta eliminada correctamente.');
    } catch {
      setError('Error al eliminar la cuenta.');
    } finally {
      setDeleting(false);
    }
  };

  const handleLogout = async () => {
    await logout();
  };

  return (
    <Layout>
      <div className="max-w-xl mx-auto mt-10 bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 md:p-8">
        <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Mi perfil</h1>
        {/* Tarjeta de cuenta */}
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 mb-6">
          <div className="flex items-center gap-6 mb-4">
            <div className="relative">
              <img
                src={photoURL || '/avatar-placeholder.png'}
                alt="Avatar"
                className="w-24 h-24 rounded-full object-cover border-4 border-blue-200 dark:border-blue-700"
              />
              <label className="absolute bottom-0 right-0 bg-blue-600 text-white rounded-full p-1 cursor-pointer hover:bg-blue-700 transition-colors">
                <input type="file" className="hidden" accept="image/*" onChange={handlePhotoChange} disabled={uploading} />
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536M9 13h6m2 2a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2h10z" />
                </svg>
              </label>
            </div>
            <div className="flex-1">
              <div className="mb-2">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">Nombre</label>
                {editing ? (
                  <input
                    className="input w-full mt-1 border border-slate-300 dark:border-slate-700 rounded px-3 py-2 bg-slate-50 dark:bg-slate-800"
                    value={displayName}
                    onChange={e => setDisplayName(e.target.value)}
                    disabled={uploading}
                  />
                ) : (
                  <div className="text-lg font-semibold">{displayName}</div>
                )}
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">Email</label>
                <div className="text-base">{user?.email}</div>
              </div>
              <div className="mb-2">
                <label className="block text-gray-700 dark:text-gray-300 text-sm font-medium">UID</label>
                <div className="text-xs text-gray-500 dark:text-gray-400">{user?.uid}</div>
              </div>
              <div className="flex gap-2 mt-2">
                {editing ? (
                  <>
                    <Button variant="primary" onClick={handleSave} isLoading={uploading}>Guardar</Button>
                    <Button variant="secondary" onClick={() => setEditing(false)} disabled={uploading}>Cancelar</Button>
                  </>
                ) : (
                  <Button variant="outline" onClick={() => setEditing(true)}>Editar</Button>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Feedback */}
        {error && <div className="p-2 mb-2 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded">{error}</div>}
        {success && <div className="p-2 mb-2 bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded">{success}</div>}

        {/* Tarjeta de información adicional */}
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 mb-6">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-lg font-bold text-blue-700 dark:text-blue-400">Información adicional</h2>
            {profileEditing ? (
              <>
                <Button variant="primary" onClick={handleProfileSave}>Guardar</Button>
                <Button variant="secondary" className="ml-2" onClick={() => setProfileEditing(false)}>Cancelar</Button>
              </>
            ) : (
              <Button variant="outline" onClick={() => setProfileEditing(true)} disabled={profileLoading}>Editar</Button>
            )}
          </div>
          {profileLoading ? (
            <div className="text-gray-500">Cargando...</div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium">Fecha de nacimiento</label>
                {profileEditing ? (
                  <input type="date" className="input w-full border border-slate-300 dark:border-slate-700 rounded px-3 py-2 bg-slate-50 dark:bg-slate-800" value={birthDate} onChange={e => setBirthDate(e.target.value)} />
                ) : (
                  <div>{birthDate ? new Date(birthDate).toLocaleDateString() : <span className="text-gray-400">No especificado</span>}</div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">DNI</label>
                {profileEditing ? (
                  <input className="input w-full border border-slate-300 dark:border-slate-700 rounded px-3 py-2 bg-slate-50 dark:bg-slate-800" value={dni} onChange={e => setDni(e.target.value)} />
                ) : (
                  <div>{dni || <span className="text-gray-400">No especificado</span>}</div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Sexo</label>
                {profileEditing ? (
                  <select className="input w-full border border-slate-300 dark:border-slate-700 rounded px-3 py-2 bg-slate-50 dark:bg-slate-800" value={gender} onChange={e => setGender(e.target.value)}>
                    <option value="">Selecciona</option>
                    <option value="masculino">Masculino</option>
                    <option value="femenino">Femenino</option>
                    <option value="otro">Otro</option>
                  </select>
                ) : (
                  <div>{gender || <span className="text-gray-400">No especificado</span>}</div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">Teléfono</label>
                {profileEditing ? (
                  <input className="input w-full border border-slate-300 dark:border-slate-700 rounded px-3 py-2 bg-slate-50 dark:bg-slate-800" value={phone} onChange={e => setPhone(e.target.value)} />
                ) : (
                  <div>{phone || <span className="text-gray-400">No especificado</span>}</div>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium">País</label>
                {profileEditing ? (
                  <input className="input w-full border border-slate-300 dark:border-slate-700 rounded px-3 py-2 bg-slate-50 dark:bg-slate-800" value={country} onChange={e => setCountry(e.target.value)} />
                ) : (
                  <div>{country || <span className="text-gray-400">No especificado</span>}</div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Consejos */}
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 mb-6">
          <h2 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-2">Consejos de seguridad y aprendizaje</h2>
          <ul className="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
            <li>Utiliza una contraseña segura y única para tu cuenta.</li>
            <li>No compartas tu información personal con desconocidos.</li>
            <li>Completa tu perfil para aprovechar al máximo la plataforma.</li>
            <li>Revisa tu progreso regularmente en el dashboard.</li>
            <li>¡Practica un poco cada día para mejorar tu inglés!</li>
          </ul>
        </div>

        {/* Sobre la app */}
        <div className="bg-white dark:bg-slate-900 rounded-xl shadow p-6 mb-6">
          <h2 className="text-lg font-bold text-blue-700 dark:text-blue-400 mb-2">Sobre English Learner Hub</h2>
          <p className="text-gray-700 dark:text-gray-300">
            English Learner Hub es una plataforma diseñada para ayudarte a aprender inglés de forma eficiente y divertida. Gestiona tu vocabulario, realiza juegos, sigue tu progreso y personaliza tu experiencia.
          </p>
        </div>

        {/* Acciones */}
        <div className="flex flex-col gap-4 mt-8">
          <Button variant="outline" onClick={handleLogout}>Cerrar sesión</Button>
          <Button variant="danger" onClick={() => setShowFirstConfirm(true)} isLoading={deleting}>Eliminar cuenta</Button>
        </div>

        {/* Doble confirmación */}
        <ConfirmDialog
          open={showFirstConfirm}
          title="¿Eliminar cuenta?"
          description="¿Seguro que quieres eliminar tu cuenta? Esta acción es irreversible."
          confirmLabel="Continuar"
          cancelLabel="Cancelar"
          danger
          onConfirm={() => {
            setShowFirstConfirm(false);
            setShowSecondConfirm(true);
          }}
          onCancel={() => setShowFirstConfirm(false)}
        />
        <ConfirmDialog
          open={showSecondConfirm}
          title="Confirmación final"
          description="¡Atención! Esto eliminará TODOS tus datos, progreso, vocabulario y estadísticas para siempre. ¿Confirmas la eliminación absoluta de tu cuenta?"
          confirmLabel={deleting ? 'Eliminando...' : 'Eliminar definitivamente'}
          cancelLabel="Cancelar"
          danger
          onConfirm={handleDeleteAccount}
          onCancel={() => setShowSecondConfirm(false)}
        />
      </div>
    </Layout>
  );
};

export default Profile;
