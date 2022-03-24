import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { HiTag } from 'react-icons/hi'
import { IoMdWallet } from 'react-icons/io'
import toast, { Toaster } from 'react-hot-toast'


const style = {
  button: `mr-8 flex items-center py-2 px-12 rounded-lg cursor-pointer`,
  buttonIcon: `text-xl`,
  buttonText: `ml-2 text-lg font-semibold`,
}

const MakeOffer = ({ isListed, selectedNft, listings, marketPlaceModule,  }) => {
  const router = useRouter()
  const [selectedMarketNft, setSelectedMarketNft] = useState()
  const [enableButton, setEnableButton] = useState(false)

  useEffect(() => {
    if (!listings || isListed === 'false') return
    ;(async () => {
      setSelectedMarketNft(
        listings.find((marketNft) => marketNft.asset.id === selectedNft.id)
      )
    })()
  }, [selectedNft, listings, isListed])

  useEffect(() => {
    if (!selectedMarketNft || !selectedNft) return

    setEnableButton(true)
  }, [selectedMarketNft, selectedNft])

  const confirmPurchase = () => {
    toast(() => (
      <div>
        <img src={selectedNft.image} width="300px"></img>
      </div>
    ), {
      style: {
        background: '#04111d',
        color: '#fff',
      },
      position: "top-center"
    });

    toast.success(`Purchase ${selectedNft.name} successful!`, {
      style: {
        background: '#04111d',
        color: '#fff',
      },
      position: "top-center"
    }, )

    

    
    router.push(`/collections/${collectionId}`);
  }
    

  const errorPurchase = (error) => 
    toast.error(`insufficient funds for gas * price`, {
      style: {
        background: '#04111d',
      },
      position: "top-center"
    })

  const buyItem = async (
    listingId = selectedMarketNft.id,
    quantityDesired = 1,
    module = marketPlaceModule
  ) => {
    try{
      await module.buyoutDirectListing({
        listingId: listingId,
        quantityDesired: quantityDesired,
      })
  
      confirmPurchase()
    }catch(error){
      errorPurchase(error)
    }
  }

  return (
    <div className="flex h-20 w-full items-center rounded-lg border border-[#151c22] bg-[#303339] px-12">
      <Toaster position="bottom-left" reverseOrder={false} />
      {isListed === 'true' ? (
        <>
          <div
            onClick={() => {
              enableButton ? buyItem(selectedMarketNft.id, 1) : null
            }}
            className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}
          >
            <IoMdWallet className={style.buttonIcon} />
            <div className={style.buttonText}>Buy Now</div>
          </div>
          <div
            className={`${style.button} border border-[#151c22]  bg-[#363840] hover:bg-[#4c505c]`}
          >
            <HiTag className={style.buttonIcon} />
            <div className={style.buttonText} onClick={() => testing()}>Make Offer</div>
          </div>
        </>
      ) : (
        <div className={`${style.button} bg-[#2081e2] hover:bg-[#42a0ff]`}>
          <IoMdWallet className={style.buttonIcon} />
          <div className={style.buttonText} >List Item</div>
        </div>
      )}
    </div>
  )
}

export default MakeOffer