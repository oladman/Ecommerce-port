-- CreateTable
CREATE TABLE "products" (
    "id" SERIAL NOT NULL,
    "ProductName" TEXT NOT NULL,
    "Price" TEXT NOT NULL,
    "Color" TEXT NOT NULL,
    "ProductDetails" TEXT NOT NULL,
    "ProductAttach" TEXT NOT NULL,
    "Type" TEXT,

    CONSTRAINT "products_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "FirstName" TEXT NOT NULL,
    "LastName" TEXT NOT NULL,
    "Email" TEXT NOT NULL,
    "PhoneNumber" TEXT NOT NULL,
    "Password" TEXT NOT NULL,
    "DfirstName" TEXT NOT NULL,
    "DlastName" TEXT NOT NULL,
    "DphoneNumber" TEXT NOT NULL,
    "Dstreet" TEXT NOT NULL,
    "Ddirections" TEXT NOT NULL,
    "Dcity" TEXT NOT NULL,
    "Dstate" TEXT NOT NULL,
    "Dlocalgva" TEXT NOT NULL,
    "Role" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);
