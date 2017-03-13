<?php 

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class AccueilNiko extends Controller{
    /**
     * @Route("/accueil")
     */
    public function accueilNiko()
    {
		return $this->render('cv.html.twig', array(
					'number' => 0,
				));
    }
}
?>
