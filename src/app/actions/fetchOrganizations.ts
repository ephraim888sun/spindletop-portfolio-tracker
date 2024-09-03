import prisma from "@/lib/db";

const fetchOrganizations = async () => {
  try {
    const organizations = await prisma.organization.findMany()
    console.log('organizations', organizations)
    return organizations;
  } catch (error) {
    return []
  }
}

export { fetchOrganizations }