import prisma from "@/lib/db";

const fetchAssetsByOrgId = async (orgId: number) => {
  try {
    const assets = await prisma.asset.findMany({
      where: {
        organizationId: {
          equals: orgId
        }
      }
    })

    console.log('assets', assets)
    return assets;
  } catch (error) {
    return []
  }
}

export { fetchAssetsByOrgId }