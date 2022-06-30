package repository

import (
	"insurance-service/pkg/db"
	"insurance-service/pkg/models"
)

type InsuranceRep struct {
}

func NewInsuranceRep() *InsuranceRep {
	return &InsuranceRep{}
}

func (i *InsuranceRep) Save(insurance *models.Insurance) Result {
	err := db.Client.Create(insurance).Error

	if err != nil {
		return Result{Error: err}
	}

	return Result{Data: insurance}
}

func (i *InsuranceRep) FindByUser(userId uint) Result {
	var insurance []models.Insurance

	err := db.Client.Find(&insurance, "user_id = ?", userId).Error

	if err != nil {
		return Result{Error: err}
	}

	return Result{Data: &insurance}
}

func (i *InsuranceRep) FindByRegistration(reg string) Result {
	var insurance []models.Insurance
	err := db.Client.Find(&insurance, "vehicle_registration = ?", reg).Error

	if err != nil {
		return Result{Error: err}
	}

	return Result{Data: &insurance}
}