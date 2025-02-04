const getresumen = async function(id) {
    try {
        
        const response = await fetch(`http://localhost:3009/resumen/${id}`, {
            method: 'GET'
        });

        if (response.ok) {
            const resumen = await response.json();
            return resumen.map(item => item.resumen);
        } else {
            const errorMessage = await response.text();
            console.error('Error al obtener resumen:', errorMessage);
            return [];
        }
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

const getvideoHD = async function(id) {
    try {
        
        const response = await fetch(`http://localhost:3009/videos/${id}`, {
            method: 'GET'
        });

        if (response.ok) {
            const video = await response.json();
            return video.map((item) => item.video)[0] || "";
        } else {
            const errorMessage = await response.text();
            console.error('Error al obtener video:', errorMessage);
            return [];
        }
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

const getvideoSinHD = async function(id) {
    try {
        
        const response = await fetch(`http://localhost:3009/videos/${id}`, {
            method: 'GET'
        });

        if (response.ok) {
            const video = await response.json();
            return video.map((item) => item.video2)[0] || "";
        } else {
            const errorMessage = await response.text();
            console.error('Error al obtener video:', errorMessage);
            return [];
        }
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
};

const getfotos = async function(id) {
    try {
        const response = await fetch(`http://localhost:3009/fotos/${id}?`, {
            method: 'GET'
        });

        if (!response.ok) throw new Error('Error al obtener la lista de fotos');

        const data = await response.json();
        const linksFotos = data.map((foto) => foto.foto);
        console.log('lista de fotos:', data.foto);
        return linksFotos;
    } catch (error) {
        console.error(error);
        return [];
    }
};

const getcomentarios = async function(id) {
    try {
        const response = await fetch(`http://localhost:3009/comentarios/${id}?`, {
            method: 'GET'
        });

        if (!response.ok) throw new Error('Error al obtener la lista de comentarios');

        const data = await response.json();
        const comentarios = data.map((item) => item.comentario);
        const calificaciones = data.map((item)=> item.calificación);
        const fechas = data.map((item)=> item.fecha);
        
        return {
            comentarios: comentarios,
            calificaciones: calificaciones,
            fechas: fechas,
        };
    } catch (error) {
        console.error(error);
        return [];
    }
};

const getinfoperfil = async function(id) {
    try {
        const response = await fetch(`http://localhost:3009/users/info/${id}`, {
            method: 'GET'
        });

        if (!response.ok) throw new Error('Error al obtener la foto de perfil');

        const data = await response.json();
        
        return data.usuario;
    } catch (error) {
        console.error(error);
    }
};

const getimgperfil = async function(id) {
    try {
        const response = await fetch(`http://localhost:3009/users/info/${id}`, {
            method: 'GET'
        });

        if (!response.ok) throw new Error('Error al obtener la foto de perfil');

        const data = await response.json();
        
        return data.imagen_perfil;
    } catch (error) {
        console.error(error);
    }
};
const getContacto = async (id) => {
    try {
        const response = await fetch(`http://localhost:3009/users/contacto/${id}`, {
            method: 'GET',
        });

        if (response.ok) {
            const data = await response.json();
            return {
                edad: data.edad,
                telefono: data.telefono,
            };
        } else {
            console.error('Error al obtener contacto:', await response.text());
            return { edad: 'No aplica', telefono: 'No aplica' };
        }
    } catch (error) {
        console.error('Error:', error);
        return { edad: 'No aplica', telefono: 'No aplica' };
    }
};


const getcompletoperfil = async function(id) {
    try {
        const response = await fetch(`http://localhost:3009/users/completoinfo/${id}`, {
            method: 'GET'
        });

        if (!response.ok) throw new Error('Error al obtener la info de perfil');

        const data = await response.json();
        
        return data.actividadEconomica;
    } catch (error) {
        console.error(error);
    }
};

const getcompletoruc = async function(id) {
    try {
        const response = await fetch(`http://localhost:3009/users/completoinfo/${id}`, {
            method: 'GET'
        });

        if (!response.ok) throw new Error('Error al obtener la info de perfil');

        const data = await response.json();
        
        return data.ruc;
    } catch (error) {
        console.error(error);
    }
};


export {getresumen, getvideoHD, getvideoSinHD, getfotos, getcomentarios, getinfoperfil, getimgperfil, getcompletoperfil, getcompletoruc, getContacto};