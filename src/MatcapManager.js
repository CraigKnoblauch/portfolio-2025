import { useLoader } from '@react-three/fiber';
import { MeshMatcapMaterial, TextureLoader } from 'three';
import { matcapImages } from 'src/matcapImages.js';

/**
 * Manages the loading and retrieval of matcaps.
 * Matcaps are flywheels in this application.
 */
export default class MatcapManager {
    constructor() {
        this.matcaps = {};

        if (!this.instance) {
            this.loadMatcaps();
            this.instance = this;
        }
        
        return this.instance;
    }

    loadMatcaps() {
        matcapImages.forEach((imageFilename) => {
            const materialName = imageFilename.split('.')[0]; // Remove the file extension
            const texture = useLoader(TextureLoader, ['./matcaps/' + imageFilename]);
            this.matcaps[materialName] = new MeshMatcapMaterial() // Load the matcap
            this.matcaps[materialName].matcap = texture;
        });
    }

    getMatcapByName(name) {
        return this.matcaps[name];
    }
}
