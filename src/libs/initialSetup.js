import Role from '../models/Rol'

export const createRoles = async () => {
    const count = await Role.estimatedDocumentCount()

    try {
        if (count > 0) return;

        const values = await Promise.all([
            new Role({ name: 'admin' }).save(),
            new Role({ name: 'manager' }).save(),
            new Role({ name: 'employee' }).save(),
        ]);

        console.log(values)
    } catch (error) {
        console.error(error);
    }
}